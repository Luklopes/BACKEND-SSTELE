const app = require('./app');

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Escutando porta ${port}. http://localhost:${port}/docs`);
});
