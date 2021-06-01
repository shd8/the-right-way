/* eslint-disable no-underscore-dangle */
const debug = require('debug')('server:usersController');
const User = require('../models/user.model');
const Product = require('../models/product.model');

function usersController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const users = await User.find({}).populate('wishlist').populate('cart');
      res.status(200);
      res.json(users);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function getUserById(req, res) {
    const userToFind = new User(req.body);
    debug(req.body);
    debug(userToFind);
    try {
      // .populate([{ path: 'wishlist', model: Product }, { path: 'cart', model: Product }])
      const users = await User.findById(userToFind);
      res.status(200);
      res.json(users);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function addUser(req, res) {
    const newUser = new User(req.body);
    debug(req.body);
    debug(newUser);
    try {
      await newUser.save();
      res.status(200);
      res.json(newUser);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteUserById(req, res) {
    const { userId } = req.params;
    try {
      await User.findByIdAndDelete(userId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  // async function updateUserById(req, res) {
  //   const { userId } = req.params;
  //   try {
  //     const updatedUser = await User.findByIdAndUpdate(
  //       userId,
  //       req.body,
  //       { new: true },
  //     );
  //     res.json(updatedUser);
  //   } catch (error) {
  //     debug(error);
  //     res.sendStatus(204);
  //   }
  // }
  async function updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(req.user._id,
        { ...req.body },
        { new: true });
      return res.json({
        updatedUser,
      });
    } catch (error) {
      return res.status(404);
    }
  }

  return {
    getAll, getUserById, addUser, deleteUserById, updateUser,
  };
}
module.exports = usersController;
