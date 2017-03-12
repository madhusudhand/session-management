var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var user = require('../utils/user');
var session = require('../utils/session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/doLogin', function(req, res, next) {
  var userDetails = user.login(req.body.username, req.body.password);

  if (userDetails) {
    var sessionID = uuid.v4();
    session.setSession(userDetails.id, sessionID);

    res.send({
      status: 'success',
      userID: userDetails.id,
      sessionID: sessionID
    });
  } else {
    res.send({
      status: 'failed',
      errorCode: 401,
      errorDescription: 'invalid username or password'
    });
  }
});

router.post('/doLogout', function(req, res, next) {
  session.clearSession(req.body.username);

  res.send({
    status: 'success'
  });
});

router.post('/isSessionActive', function(req, res, next) {
  var isActive = session.checkSession(req.body.userID, req.body.sessionID);

  res.send({
    isSessionActive: isActive
  });
});

module.exports = router;
