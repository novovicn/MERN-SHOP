import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const addOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && !orderItems.length > 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');

  if (orders) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('Orders not found!');
  }
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  const {
    id,
    status,
    update_time,
    payer: { email_address },
  } = req.body;

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id,
      status,
      update_time,
      email_address,
    };
    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  if (orders) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('No orders found');
  }
});

export { addOrder, getOrderById, updateOrderToPaid, updateOrderToDelivered, getUserOrders, getOrders };
