const { DataTypes } = require('sequelize');
const sequelize = require('../../db/config');
const User = require('./User');

const Order = sequelize.define('Order', {
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = Order;
