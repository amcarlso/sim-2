const express = require('express');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());

app.get('/api/houses', controller.getAll)
app.delete('/api/house/:id', controller.deleteHouse)
app.post('/api/house', controller.addHouse)

massive(CONNECTION_STRING).then(connection => {
  console.log('we are connected to database!')
  app.set('db', connection)
  app.listen(SERVER_PORT, console.log(`Listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))
