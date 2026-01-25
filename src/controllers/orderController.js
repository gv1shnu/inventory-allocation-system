const orderService = require('../services/orderService');

async function createOrder(req, res) {
  try {
    const { productId, quantity } = req.body;

    // basic request validation only
    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    const order = await orderService.placeOrder(productId, quantity);

    return res.status(201).json({
      message: 'Order placed successfully',
      order,
    });
  } catch (error) {
    if (error.message === 'PRODUCT_NOT_FOUND') {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (error.message === 'INSUFFICIENT_STOCK') {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  createOrder,
};
