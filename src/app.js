const app = require('express')();
const setupRoutes = require('./config/routes');
const setupMiddlewares = require('./config/midlewares');

setupMiddlewares(app);
setupRoutes(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;
