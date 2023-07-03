const { Payment } = require('../models/Payment');  // Asegúrate de tener definido tu modelo Payment

const paymentController = {
  // Obtener todos los pagos
  getAllPayments(req, res) {
    Payment.findAll()
      .then(payments => res.json(payments))
      .catch(err => res.json(err));
  },

  // Crear un nuevo pago
  createPayment(req, res) {
    Payment.create(req.body)
      .then(payment => res.json(payment))
      .catch(err => res.json(err));
  },

  // Obtener un solo pago por id
  getPayment(req, res) {
    Payment.findByPk(req.params.id)
      .then(payment => res.json(payment))
      .catch(err => res.json(err));
  },

  // Actualizar un pago
  updatePayment(req, res) {
    Payment.update(req.body, { where: { id: req.params.id } })
      .then(payment => res.json(payment))
      .catch(err => res.json(err));
  },

  // Eliminar un pago
  deletePayment(req, res) {
    Payment.destroy({ where: { id: req.params.id } })
      .then(payment => res.json(payment))
      .catch(err => res.json(err));
  }
};

module.exports = paymentController;
