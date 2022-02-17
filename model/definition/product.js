const Sequelize = require('sequelize');
const { sequelize } = require('../driverService');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = {
    Product: Product
};