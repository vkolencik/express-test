const express = require('express')
const serverless = require('serverless-http')
const faker = require('faker')
const app = express()

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`Hello, ${faker.commerce.color()} ${faker.commerce.product().toLowerCase()}!`);
})


module.exports = app;
module.exports.handler = serverless(app);
