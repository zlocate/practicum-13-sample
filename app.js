const express = require('express');
const mongoose = require('mongoose');

const {
  PORT = 3000,
} = process.env;

const app = express();


app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '608dc1fa9454142548dd909b',
  };

  next();
});

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use((req, res) => {
  res.status(404).send({
    message: 'Не найдено',
  });
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`App listening onm port ${PORT}`);
});
