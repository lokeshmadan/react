require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Started up at port ${port} testing the change`);
});

module.exports = {app};
