import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './Router/Router';

dotenv.config();

class Server {
  private app = express();
  private port = process.env.PORT ?? 3000;
  private bdUrl = process.env.DB_URL ?? '';
  constructor() {
    this.configureExpressApp();
    this.configureRouts();
  }

  private configureExpressApp() {
    this.app.use(express.json());
  }
  private configureRouts() {
    this.app.get('/', (req, res) => {
      res.json({ users: 'https://users/', orders: 'https://orders/' });
    });
    this.app.use('/', router);
  }
  async startServer() {
    try {
      await mongoose.connect(this.bdUrl);

      this.app.listen(this.port, () => {
        console.log(`Server has been started on port ${this.port}`);
      });
    } catch (e) {
      console.log(e);
    }
  }
}

const expressServer = new Server();
export default expressServer;
