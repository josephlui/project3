const db = require("../models");
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("302735331685-j2de3ss9t9pcmout25hjo0e0lg0d550v.apps.googleusercontent.com");
const axios = require('axios')

async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "302735331685-j2de3ss9t9pcmout25hjo0e0lg0d550v.apps.googleusercontent.com",  
     
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  
  console.log ("user id " + userid);
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
  return payload;
}

/**
 * If user ID exists, refresh the name
 * otherwise, create a new user
 * @param {*} userId 
 * @param {*} name 
 */
async function findUserByUserId (name, email) {

  // upsert on userId
  return db.User.findOneAndUpdate(
    { userId: email},
    {name: name }   ,
    {new: true, upsert: true}
  )
}


// Defining methods for the userController
module.exports = {
    
  /**
    * Returns user object ID by token ID
    * @param {*} req 
    * @param {*} res 
    */
   findByTokenId: function(req, res) {
    db.Session.findOne({tokenId: req.params.id})
    .then(dbModel => {console.log (dbModel);res.json(dbModel)})
    .catch(err => res.status(422).json(err));
  },

  findUserByToken: function (req, res) {
    // upsert on userId
    const current = new Date();
    var expiryDate = new Date();
    expiryDate.setMinutes = current.getMinutes + 3;
    return db.Session.findOneAndUpdate(
     { tokenId: req.params.token,
      expiryDate: { $gte : current }
    },
     { expiryDate: expiryDate }   ,
     {new: true, upsert: false}
  )
  },

  logout: function (req, res) {
    // console.log ("request received to logout");
    // var token = req.body.token;
    // console.log (token);
    // return axios.get('https://mail.google.com/mail/u/0/?logout&hl=en')
    // .then (result => {
    //   console.log (result);
    //   res.end();
    // })
    res.end();
    // client.revokeToken(token, function(err, body) {
    //   if (err) {
    //     console.log (err);
    //   } else {
    //     console.log (body);
    //   }
    // });
  
  },

  /**
   * Retrieves all users in user collection
   * @param {*} req 
   * @param {*} res 
   */
  retrieveAll: function (req, res) {
     db.User.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err =>res.status(422).json(err));
  },
  
  /**
   * Registers an user in the system
   * @param {*} req 
   * @param {*} res 
   */
  register: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  /**
   * Updates the approver list of a user to allow user to view another user's calendar
   * @param {*} req 
   * @param {*} res 
   */
  updateApproverList: function (req, res) {
    db.User.findOneAndUpdate(
          {_id:  req.body.userId  },
        { $push: { approverList: req.body.clientId } },
         { new: true })   
         .then (updateResult => res.json(updateResult))
         .catch(err => res.status(422).json(err));
  },

 
  /**
   * Validates id token from user
   * if the token is valid, upserts user to user collection
   * @param {*} req 
   * @param {*} res 
   */
  validateOauthID: function (req, res) {

    var token = "";
    var sessionToken = req.body.idtoken;
    // test code
    // return new Promise ((resolve, reject ) => { 
    //   token="abc1234def";
    //   resolve({given_name: "f",email: "f@gmail.com"})})
    verify(req.body.idtoken)
    .then(result => {
      console.log ("result from firebase validate function: " + JSON.stringify(result));
      if (!(result.name && result.email && result.email_verified)){
        throw err ("invalid token");
      }
      console.log ("validating " + result);
      token = result.sub
      return result;
    })
    .then(result => findUserByUserId(result.given_name, result.email))
    .then (user => {
      return  db.Session.findOneAndUpdate(
        {user: user._id},
        {tokenId: token,
         expiryDate: new Date(),
         user: user._id,
         name: user.given_name
        },
        {returnNewDocument: true, upsert: true});
    })  
    .then (() => {
      res.status(200).json({
        token: token,
        sessionToken: sessionToken
      })})
    .catch(err => {
      console.log (err);
      res.status(422).json(err);
    }); 

  }
}

