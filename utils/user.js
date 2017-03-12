function User() {
  var userList  = [
    { id: 1, username: 'abc', password: '123' }
  ];


  this.login = function(username, password) {
    for (user of userList) {
      if (user.username === username && user.password === password) {
        return user;
      }
    }
    return null;
  }
}

module.exports = new User();
