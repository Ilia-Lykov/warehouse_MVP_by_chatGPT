const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://username:password@localhost:5432/warehouse_db');

module.exports = sequelize;
