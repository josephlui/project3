const axios = require('axios')

const BASE_USR = '/api/user';
const BASE_APPT = '/api/schedule'

var API = {
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
    retrieveAppt: function (apptId) {
        return axios.get(BASE_APPT + '/' + apptId);
    }
}

module.exports = API;