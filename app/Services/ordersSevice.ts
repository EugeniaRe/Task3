import Order from '../Models/Order';
interface IOrder {
  user_id: string;
  status: string;
  option: string;
  price: string;
  created_at: Date;
}
class OrdersService {
  async create(order: IOrder) {
    const newOrder = await Order.create(order);
    return newOrder;
  }

  async getById(id: string) {
    const order = await Order.findById(id);
    return order;
  }

  async getAll() {
    const orders = await Order.find();
    return orders;
  }
}

const ordersService = new OrdersService();
export default ordersService;
