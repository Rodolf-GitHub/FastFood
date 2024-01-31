
// userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');
const userController = new UserController();

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;