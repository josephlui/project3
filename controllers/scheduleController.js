const db = require("../models");

module.exports = {

  /**
    * Finds and appointment by id
    * @param {*} req 
    * @param {*} res 
    */
  retrieveAppt: function(req, res) {
    console.log (req.session );
     if (req.session && req.session.user) { // Check if session exists
      console.log ('userID ' + req.session.user);
      db.Appointment  
      .find({"startDate":
            {"$gte": new Date(req.params.date)},
             $or: [ { clientId: req.session.user.id }, { calenderOwnerUserId: req.session.user.id } ] 
            })
      .populate("clientId")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    } else {
      res.end();
      //res.redirect('/login');
    }
   
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
