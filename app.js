const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
