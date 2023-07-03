const { User } = require('../models/User');  // Asegúrate de tener definido tu modelo User

const userController = {
  // Obtener todos los usuarios
  getAllUsers(req, res) {
    User.findAll()
      .then(users => res.render('users', { users }))
      .catch(err => res.json(err));
  },

  // Crear un nuevo usuario
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err));
  },

  // Obtener un solo usuario por id
  getUser(req, res) {
    User.findByPk(req.params.id)
      .then(user => res.render('user', { user }))
      .catch(err => res.json(err));
  },

  // Actualizar un usuario
  updateUser(req, res) {
    User.update(req.body, { where: { id: req.params.id } })
      .then(user => res.json(user))
      .catch(err => res.json(err));
  },

  // Eliminar un usuario
  deleteUser(req, res) {
    User.destroy({ where: { id: req.params.id } })
      .then(user => res.json(user))
      .catch(err => res.json(err));
  }
};

module.exports = userController;
