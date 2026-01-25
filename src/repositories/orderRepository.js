const Order = require('../models/order');

async function create(orderData, transaction) {
  return Order.create(orderData, { transaction });
}

module.exports = {
  create,
};
