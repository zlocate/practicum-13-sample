const express = require('express');

const cardsRoutes = express.Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

cardsRoutes.get('/cards', getCards);
cardsRoutes.post('/cards', express.json(), createCard);
cardsRoutes.delete('/cards/:cardId', deleteCard);
cardsRoutes.put('/cards/:cardId/likes', likeCard);
cardsRoutes.delete('/cards/:cardId/likes', dislikeCard);

exports.cardsRoutes = cardsRoutes;
