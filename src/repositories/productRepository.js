const Product = require('../models/product');

async function findById(productId, transaction) {
  return Product.findByPk(productId, { transaction });
}

async function updateStock(productId, newStock, transaction) {
  return Product.update(
    { stock: newStock },
    { where: { id: productId }, transaction }
  );
}

module.exports = {
  findById,
  updateStock,
};
