require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
const path = require('path');
const emailRouter = require('./routes/email');

// Mongoose connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("Connection established successfully");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/contact', emailRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`run on port ${port}`));