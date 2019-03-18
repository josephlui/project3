const db = require("../models");

module.exports = {

  /**
    * Finds and appointment by id
    * @param {*} req 
    * @param {*} res 
    */
  retrieveAppt: function(req, res) {
     
      // add logic to make sure sessions is not expired
      db.Session.findOne({ tokenId: req.params.id})
      .then (session => {
        // console.log (session);
        // console.log (req.params.date);
        // console.log (session.user);
        // var tmp = '5c8b90c21a5607cc0168219c';
        // var d = new Date(req.params.date);
        // console.log (d);
        return db.Appointment  
        .find({"startDate":
            {"$gte": new Date(req.params.date)},
             $or: [ { clientId: session.user }, { calenderOwnerUserId: session.user} ]}) 
        .populate("clientId")
      })
      .then(dbModel => {console.log (dbModel);res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  
  /**
   * Creates an appointment and updates the appointmentBookingList for both user and client 
   * @param {*} req 
   * @param {*} res 
   */
  create: function(req, res) {

    // TODO: this needs to be wrapped in a transaction for atomicity
    db.Appointment
      .create(req.body)
      .then(dbModel => {
         return db.User.updateMany(
            {_id: 
              { $in: [ req.body.ownerUserId , req.body.clientId ] }},
          { $push: { appointmentBookingList: dbModel._id } },
           { new: true })   
      }).then (updateResult => res.json(updateResult))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {

      console.log (req.body);
      console.log (req.params.id);
      db.Appointment.findOneAndUpdate(
            {_id: req.params.id}, req.body,{returnNewDocument: true})   
      .then (updateResult => res.json(updateResult))
      .catch(err => res.status(422).json(err));
  }
};
