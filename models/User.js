const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('acda', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

class User extends Model {}

User.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  paymentStatus: { type: DataTypes.STRING },
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;
