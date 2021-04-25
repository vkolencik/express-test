import faker from 'faker'

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: `Hello, ${faker.commerce.color()} ${faker.commerce.product().toLowerCase()!"
  };
}
