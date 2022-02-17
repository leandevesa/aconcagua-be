const { Product } = require('../definition/product');

module.exports = {
    findById: async function (id) {
        return await Product.findByPk(id);
    }
};