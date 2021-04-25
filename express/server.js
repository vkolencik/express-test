const express = require('express')
const serverless = require('serverless-http')
const faker = require('faker')

const app = express()
const router = express.Router();

app.get('/', (req, res) => {
  res.status(200);
  res.set('Content-Type', 'text/plain');
  res.send(`Hello, ${faker.commerce.color()} ${faker.commerce.product().toLowerCase()}!`);
  res.end();
})
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
