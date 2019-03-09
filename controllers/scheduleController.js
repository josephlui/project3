const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findById: function(req, res) {
    db.Appointment  
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  create: function(req, res) {
    db.Appointment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  retrieveAppointment: function (req, res) {
      
  }
  
};
