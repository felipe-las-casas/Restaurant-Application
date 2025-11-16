import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController.ts';
import { AuthUserController } from './controllers/user/AuthUserController.ts';
import { DetailUserController } from './controllers/user/DetailUserController.ts';
import { isAutheticated } from './middlewares/isAutheticated.ts';
import { CreateCategoryController } from './controllers/category/CreateCategoryController.ts';
import { ListCategoryController } from './controllers/category/ListCategoryController.ts';
import { CreateProductController } from './controllers/product/CreateProductController.ts';
import uploadConfig from './config/multer.ts';
import multer from 'multer';
import { ListByCategoryController } from './controllers/product/ListByCategoryController.ts';
import { CreateOrderController } from './controllers/order/CreateOrderController.ts';
import { RemoveOrderController } from './controllers/order/RemoveOrderController.ts';
import { AddItemController } from './controllers/order/AddItemController.ts';
import { RemoveItemController } from './controllers/order/RemoveItemController.ts';
import { SendOrderController } from './controllers/order/SendOrderController.ts';
import { ListOrdersController } from './controllers/order/ListOrdersController.ts';
import { DetailOrderController } from './controllers/order/DetailOrderController.ts';
import { FinishOrderController } from './controllers/order/FinishOrderController.ts';



const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// User Routes

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me',isAutheticated, new DetailUserController().handle);

// Category Routes

router.post('/category', isAutheticated, new CreateCategoryController().handle);
router.get('/category', isAutheticated, new ListCategoryController().handle);

// Product Routes

router.post('/product', isAutheticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAutheticated, new ListByCategoryController().handle);

// Order Routes

router.post('/order', isAutheticated, new CreateOrderController().handle);
router.delete('/order', isAutheticated, new RemoveOrderController().handle);

router.post('/order/add', isAutheticated, new AddItemController().handle);
router.delete('/order/remove', isAutheticated, new RemoveItemController().handle);
router.put('/order/send', isAutheticated, new SendOrderController().handle);
router.get('/orders', isAutheticated, new ListOrdersController().handle);
router.get('/order/detail',isAutheticated, new DetailOrderController().handle);
router.put('/order/finish', isAutheticated, new FinishOrderController().handle);

export { router };