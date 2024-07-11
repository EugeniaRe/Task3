import express from 'express';
import User from '../Schemas/User';
class Controller {
  async createUser(req: express.Request, res: express.Response) {
    try {
      const { email } = req.body;
      const user = await User.create({
        email,
        order_ids: [],
        created_at: Date.now(),
      });
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUserById(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'ID is not defined' });
      }
      const user = await User.findById(id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllUsers(req: express.Request, res: express.Response) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createOrder(req: express.Request, res: express.Response) {
    try {
      const { email } = req.body;
      const user = await User.create({
        email,
        order_ids: [],
        created_at: Date.now(),
      });
      res.json(user);
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
      const user = await User.findById(id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllOrders(req: express.Request, res: express.Response) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

const controller = new Controller();
export default controller;
