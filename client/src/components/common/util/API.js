const axios = require("axios");

const BASE_USR = "/api/user";
const BASE_APPT = "/api/schedule";

var API = {
  retrieveUser: function(token) {
    return axios.get(BASE_USR + "/" + token);
  },
  retrieveAllUsers: function() {
    return axios.get(BASE_USR);
  },
  updateUser: function(userId, user) {
    const config = { userId, user };
    return axios.put(BASE_USR, config);
  },
  registerUser: function(userId, name) {
    const config = { userId, name };
    return axios.post(BASE_USR, config);
  },
  scheduleAppt: function(appt) {
    const config = {
      calenderOwnerUserId: appt.calendarOwnerUserId,
      clientId: appt.clientId,
      startDate: appt.startDateTime,
      endDate: appt.endDateTime,
      description: appt.name,
      color: appt.classes
    };

    return axios.post(BASE_APPT, config);
  },
  updateAppt: function(item) {
    const { _id } = item;
    const config = {
      color: item.classes,
      description: item.name,
      startDate: item.startDateTime,
      endDate: item.endDateTime
    };

    return axios.put(BASE_APPT + "/" + _id, config);
  },
  removeAppt: function(apptId) {
    const config = {
      apptId: apptId
    };
    console.log(config);
    return axios.delete(BASE_APPT + "/delete", { data: config });
  },
  retrieveAppt: function(id, date) {
    return axios.get(BASE_APPT + "/" + id + "/" + date);
  },
  retrieveApptById: function(id) {
    return axios.get(BASE_APPT + "/" + id);
  },
  retrieveAllAppt: function(userIds, date) {
    const config = {
      userIds: userIds,
      date: date
    };
    console.log("---config---");
    console.log(config);
    return axios.post(BASE_APPT + "/All", config);
  },
  logout: function(config) {
    return axios.post(BASE_USR + "/logout", config);
  }
};

module.exports = API;
