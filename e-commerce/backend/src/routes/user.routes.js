/* eslint-disable no-underscore-dangle */
const express = require('express');
const userController = require('../controllers/usersController')();

const router = express.Router();

router
  .route('/')
  .get(userController.getAll)
  .post(userController.updateUser);

module.exports = router;
