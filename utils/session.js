function Session() {
  var sessions = {};

  this.checkSession = function(userID, sessionID) {
    console.log(sessions);
    return sessions[userID] && sessions[userID] === sessionID;
  };

  this.getSession = function(userID) {
    return sessions[userID];
  };

  this.setSession = function(userID, sessionID) {
    return sessions[userID] = sessionID;
  };

  this.clearSession = function(userID) {
    sessions[userID] = undefined;
  };
}

module.exports = new Session();
