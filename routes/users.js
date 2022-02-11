const express = require('express');

const usersRoutes = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

usersRoutes.get('/', getUsers);
usersRoutes.get('/:userId', getUserById);
usersRoutes.post('/', express.json(), createUser);
usersRoutes.patch('/me', express.json(), updateProfile);
usersRoutes.patch('/me/avatar', express.json(), updateAvatar);

exports.usersRoutes = usersRoutes;
