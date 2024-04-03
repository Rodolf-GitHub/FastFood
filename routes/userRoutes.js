const express = require('express');
const router = express.Router();
const ValidateAccess = require('../middleWares/validateAccess'); // Importar la función de middleware correctamente
const validateAccess=new ValidateAccess()
const UserController = require('../controllers/userControllers'); // Importar el controlador de usuario correctamente
const userController = new UserController();


router.get('/users', validateAccess.validateAccess(['master','admin']), userController.getAllUsers);
router.get('/users/:id', validateAccess.validateAccess(['master', 'admin']), userController.getUserById);
router.post('/users', validateAccess.validateAccess(['master']), userController.createUser);
router.put('/users/:id', validateAccess.validateAccess(['only_self']), userController.updateUser);
router.delete('/users/:id', validateAccess.validateAccess(['master']), userController.deleteUser);
router.post('/login', userController.loginUser);
router.post('/createDefaultUser', userController.createDefaultUser);


module.exports = router;
