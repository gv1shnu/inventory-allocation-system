const sequelize = require('../models');
const productRepository = require('../repositories/productRepository');
const orderRepository = require('../repositories/orderRepository');

async function placeOrder(productId, quantity) {
  return sequelize.transaction(async (transaction) => {
    // 1. Fetch product
    const product = await productRepository.findById(productId, transaction);

    if (!product) {
      throw new Error('PRODUCT_NOT_FOUND');
    }

    // 2. Validate stock
    if (product.stock < quantity) {
      throw new Error('INSUFFICIENT_STOCK');
    }

    // 3. Deduct stock
    const newStock = product.stock - quantity;
    await productRepository.updateStock(productId, newStock, transaction);

    // 4. Create order
    const order = await orderRepository.create(
      {
        productId,
        quantity,
        status: 'SUCCESS',
      },
      transaction
    );

    return order;
  });
}

module.exports = {
  placeOrder,
};
