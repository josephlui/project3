const tokenID = "token";
var sessionManagement = {
    /**
     * Returns token
     * else null
     * @param {*} storage 
     */
    retrieveSession(storage) {

        let token = storage.getItem(tokenID);
        return token;
    },

    /**
     * Creates the token in session storage
     * @param {*} storage 
     * @param {*} token 
     */
    createSessionId (storage, token) {
        storage.setItem (tokenID, token);
    },
    
    /**
     * Purges session storage
     * @param {*} storage 
     */
    invalidateSession(storage){
        storage.clear();
    }

}

module.exports = sessionManagement;