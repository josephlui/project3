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
    scheduleAppt: function(calenderOwnerUserId,
                            clientId,
                            startDate,
                            endDate){
        const config = 
            { calenderOwnerUserId,
              clientId,
              startDate,
              endDate };

        return axios.post(BASE_APPT, config);
    },
    retrieveAppt: function (userId, date) {
        return axios.get(BASE_APPT + '/' + userId + '/' + date);
    }
}

module.exports = API;