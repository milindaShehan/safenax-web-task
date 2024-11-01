const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(DB_URL)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log('Error in connecting DB', err);
  });

const menuRouter = require('./routs/menu');
app.use('/menu', menuRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
