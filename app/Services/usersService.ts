import { Request } from 'express';
import User from '../Models/User';
import { RootQuerySelector } from 'mongoose';
class UsersService {
  async create(email: string) {
    const user = await User.create({
      email,
      order_ids: [],
      created_at: Date.now(),
    });
    return user;
  }
  async getById(id: string) {
    const user = await User.findById(id);
    return user;
  }

  async getByEmail(email: RootQuerySelector<Request>) {
    const user = await User.findOne(email);
    return user;
  }

  async getAll() {
    const users = await User.find();
    return users;
  }

  async addOrder(userId: string, orderId: string) {
    return User.findByIdAndUpdate(
      userId,
      { push: { order_ids: orderId } },
      { new: true }
    );
  }
}

const usersService = new UsersService();
export default usersService;
