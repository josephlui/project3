const db = require("../models");


module.exports = {

    /**
     * Finds and appointment by id
     * @param {*} req 
     * @param {*} res 
     */
    findById: function(req, res) {
    db.Appointment  
      .findById(req.params.id)
      .populate("ownerUserId")
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
  }
};
