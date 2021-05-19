const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Employee');

const Employee = mongoose.model('employee');

const mongoUri =
  'mongodb+srv://cnq:IwhQb6jtu2XHgjex@cluster0.5zacv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('connected to mongo yee');
});
mongoose.connection.on('error', (err) => {
  console.log('error', err);
});
app.get('/', (req, res) => {
  res.send('Welcon Node');
});

app.listen(3000, () => {
  console.log('server jalan');
});
