const express = require('express');
const cors = require('cors');
const sequelize = require('./models');
require('./models/product');
require('./models/order');

const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/order', orderRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

sequelize.sync();

module.exports = app;
