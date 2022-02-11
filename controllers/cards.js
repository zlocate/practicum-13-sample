const Card = require('../models/card');

module.exports.getAll = (req, res) => {
  Card.find({})
    .then((cards) => res.send(
      cards,
    ))
    .catch(() => res.status(500).send({
      message: 'На сервере произошла ошибка',
    }));
};

module.exports.create = (req, res) => {
  const {
    name,
    link,
  } = req.body;

  Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.send(
      card,
    ))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({
          message: `Переданы некорректные данные. ${err.message}`,
        });
      } else {
        res.status(500).send({
          message: 'На сервере произошла ошибка',
        });
      }
    });
};

module.exports.del = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({
          message: 'Не найдено',
        });
      } else {
        res.send(
          card,
        );
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({
          message: 'Переданы некорректные данные',
        });
      } else {
        res.status(500).send({
          message: 'На сервере произошла ошибка',
        });
      }
    });
};

module.exports.like = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId, {
      $addToSet: {
        likes: req.user._id,
      },
    }, {
      new: true,
    },
  )
    .then((card) => {
      if (!card) {
        res.status(404).send({
          message: 'Не найдено',
        });
      } else {
        res.send(
          card,
        );
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({
          message: 'Переданы некорректные данные',
        });
      } else {
        res.status(500).send({
          message: 'На сервере произошла ошибка',
        });
      }
    });
};

module.exports.unlike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId, {
      $pull: {
        likes: req.user._id,
      },
    }, {
      new: true,
    },
  )
    .then((card) => {
      if (!card) {
        res.status(404).send({
          message: 'Не найдено',
        });
      } else {
        res.send(
          card,
        );
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({
          message: 'Переданы некорректные данные',
        });
      } else {
        res.status(500).send({
          message: 'На сервере произошла ошибка',
        });
      }
    });
};
