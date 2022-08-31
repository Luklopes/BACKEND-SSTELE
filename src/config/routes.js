const { createUser, findAll } = require('../routes/users');

module.exports = (app) => {
  app.route('/users')
    .get(findAll)
    .post(createUser);
};
