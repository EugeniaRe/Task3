import { Router } from 'express';
import controller from '../Controller/Controller';

const router = Router();

router.post('/users', controller.createUser);

router.get('/users/:id', controller.getUserById);

router.get('/users', controller.getAllUsers);

router.post('/orders', controller.createOrder);

router.get('/orders/:id', controller.getOrderById);

router.get('/orders', controller.getAllOrders);

export default router;
