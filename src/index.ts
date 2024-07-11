import express from 'express';
import mongoose from 'mongoose';
import router from './Router/Router';

const PORT = 5000;
const DB_URL =
  'mongodb+srv://eugeniya:eugeniya@clustertask3.nlyxdyk.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTask3';

const app = express();

app.use(express.json());

app.use('/', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
