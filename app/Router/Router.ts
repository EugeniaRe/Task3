import { Router } from 'express';
import usersController from 'Controllers/usersController';
import ordersController from 'Controllers/ordersController';

const router = Router();

router.post('/users', usersController.createUser);

router.get('/users/:id', usersController.getUserById);

router.get('/users', usersController.getAllUsers);

router.post('/orders', ordersController.createOrder);

router.get('/orders/:id', ordersController.getOrderById);

router.get('/orders', ordersController.getAllOrders);

export default router;
