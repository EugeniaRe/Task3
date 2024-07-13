import { Request, Response } from 'express';
import { STATUS_CODES } from 'http';
import User from '../Models/User';
import usersService from 'Services/usersService';
import mongoose from 'mongoose';
class UsersController {
  async createUser(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: STATUS_CODES[400] });
      }

      const isUserExists = await usersService.getByEmail(email);

      if (isUserExists) {
        return res.status(409).json({
          message: `${STATUS_CODES[409]}: User with this email already exists`,
        });
      }

      const user = usersService.create(email);

      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message ?? STATUS_CODES[500] });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          message: `${STATUS_CODES[409]}: ID is expected`,
        });
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: STATUS_CODES[400] });
      }

      const user = await usersService.getById(id);

      if (!user) {
        return res
          .status(404)
          .json({ message: `${STATUS_CODES[404]}: User not found` });
      }
      return res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message ?? STATUS_CODES[500] });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await usersService.getAll();
      return res.json({ users });
    } catch (err) {
      res.status(500).json({ message: err.message ?? STATUS_CODES[500] });
    }
  }
}

const usersController = new UsersController();
export default usersController;
