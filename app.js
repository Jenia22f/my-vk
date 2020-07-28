const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/post');
const app = express();
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB Connected!'))
  .catch(error => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/feed', postsRoutes);


module.exports = app;
