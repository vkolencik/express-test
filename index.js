const express = require('express')
const faker = require('faker')
const app = express()

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`Hello, ${faker.commerce.color()} ${faker.commerce.product().toLowerCase()}!`);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
