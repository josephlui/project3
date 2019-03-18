const axios = require('axios')

const BASE_USR = '/api/user';
const BASE_APPT = '/api/schedule'

var API = {
    retrieveUser: function(userId){
        return axios.get(BASE_USR + "/" + userId);
    },
    retrieveAllUsers: function() {
        return axios.get(BASE_USR);
    },
    updateApproverList: function (userId, clientId) {
        const config = {userId, clientId};
        return axios.put (BASE_USR, config);
    },
    registerUser: function (userId, name){
        const config = {userId, name};
        return axios.post (BASE_USR, config);
    },
    scheduleAppt: function(appt){
        

        const config = { "calenderOwnerUserId": appt.calendarOwnerUserId,
              "clientId": appt.clientId,
              "startDate": appt.startDateTime,
              "endDate": appt.endDateTime,
              "description": appt.name,
              "color": appt.classes
        }
             
  

        return axios.post(BASE_APPT, config);
    },
    updateAppt: function (item){

        const {_id} = item;
        const config = { 
            color: item.classes,
            description: item.name,
            startDate: item.startDateTime,
            endDate: item.endDateTime
        }
       
        return axios.put(BASE_APPT + "/" + _id, config);
    },
    retrieveAppt: function (id, date) {
        return axios.get(BASE_APPT + '/'+ id + '/' + date);
    },
    logout: function(){
        return axios.post(BASE_USR + "/logout");
    }
}

module.exports = API;