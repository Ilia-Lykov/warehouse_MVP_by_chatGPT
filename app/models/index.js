const sequelize = require('../../db/config');
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

// Определение связей между моделями
Order.belongsTo(User, { foreignKey: 'userId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true }); // Удаляет и создаёт все таблицы заново
        console.log('Database synced');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();

module.exports = {
    sequelize,
    Product,
    User,
    Order,
    OrderItem,
};
