const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('acda', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

class Payment extends Model {}

Payment.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER },
  amount: { type: DataTypes.DECIMAL(10, 2) },
  paymentMethod: { type: DataTypes.STRING },
}, {
  sequelize,
  modelName: 'Payment',
});

module.exports = Payment;
