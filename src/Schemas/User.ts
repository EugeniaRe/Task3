import mongoose from 'mongoose';

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  order_ids: {
    type: Array,
  },
  created_at: {
    type: Date,
  },
});

export default mongoose.model('User', User);
