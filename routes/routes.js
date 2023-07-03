const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const paymentController = require('../controllers/paymentController');

// Rutas para usuarios
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Rutas para pagos
router.get('/payments', paymentController.getAllPayments);
router.post('/payments', paymentController.createPayment);
router.get('/payments/:id', paymentController.getPayment);
router.put('/payments/:id', paymentController.updatePayment);
router.delete('/payments/:id', paymentController.deletePayment);

module.exports = router;
