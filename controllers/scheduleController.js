const db = require("../models");

module.exports = {

  /**
    * Finds and appointment by id
    * @param {*} req 
    * @param {*} res 
    */
  retrieveAppt: function(req, res) {
   
    db.Appointment  
      .find({"startDate":
            {"$gte": new Date(req.params.date)},
             $or: [ { clientId: req.params.id }, { calenderOwnerUserId: req.params.id } ] 
            })
      .populate("clientId")
      .then(dbModel => res.json(dbModel))
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
