require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
require('./startup/routes')(app);
require('./startup/sanitization')(app);


dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

const port = process.env.PORT || 8080;

const mongoDBUrl = process.env.DB_URL;

mongoose.connect(mongoDBUrl).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

/*
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
*/

module.exports = app;
