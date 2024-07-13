import express from 'express';
import Order from '../Models/Order';
class OrdersController {
  async createOrder(req: express.Request, res: express.Response) {
    try {
      const { user_id, status, option, price } = req.body;
      const order = await Order.create({
        user_id,
        status,
        option,
        price,
        created_at: Date.now(),
      });
      res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOrderById(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'ID is not defined' });
      }
      const order = await Order.findById(id);
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllOrders(req: express.Request, res: express.Response) {
    try {
      const order = await Order.find();
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

const ordersController = new OrdersController();
export default ordersController;
