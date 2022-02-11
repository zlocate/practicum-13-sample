const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();
const { usersRoutes } = require('./routes/users');
const { cardsRoutes } = require('./routes/cards');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '607dccf22d4d6fac6eb9a7e9',
  };

  next();
});

app.use('/users', usersRoutes);
app.use('/', cardsRoutes);

app.listen(PORT, () => {
});
