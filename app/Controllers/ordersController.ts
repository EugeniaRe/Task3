import { Request, Response } from 'express';
import { STATUS_CODES } from 'http';
import Order from '../Models/Order';
import ordersService from '../Services/ordersSevice';
import usersService from '../Services/usersService';
class OrdersController {
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await ordersService.getAll();
      return res.json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message ?? STATUS_CODES[500] });
    }
  }
  async createOrder(req: Request, res: Response) {
    try {
      const { user_id, status, option, price } = req.body;

      if (!user_id || !price) {
        return res.status(400).json({ message: STATUS_CODES[400] });
      }

      const user = await usersService.getById(user_id);
      if (!user) {
        return res
          .status(404)
          .json({ message: `${STATUS_CODES[404]}: User not found` });
      }

      const order = await Order.create({
        user_id,
        status: 'Created',
        option,
        price,
        created_at: Date.now(),
      });

      await usersService.addOrder(order.user_id, order._id);

      res.status(201).json(order);
    } catch (err) {
      res.status(500).json({ message: err.message ?? STATUS_CODES[500] });
    }
  }

  async getOrderById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          message: `${STATUS_CODES[409]}: ID is expected`,
        });
      }

      const order = await ordersService.getById(id);

      if (!order) {
        return res
          .status(404)
          .json({ message: `${STATUS_CODES[404]}: Order not found` });
      }

      return res.json(order);
    } catch (err) {
      res.status(500).json({ message: err.message ?? STATUS_CODES[500] });
    }
  }
}

const ordersController = new OrdersController();
export default ordersController;
