import mongoose from 'mongoose';

const Order = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  option: {
    type: String,
  },
  price: {
    type: String,
  },
  created_at: {
    type: Date,
  },
});

export default mongoose.model('Order', Order);
