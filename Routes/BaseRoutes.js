import express from 'express';
import { allProducts, getproductById, getProductsBycategory } from '../Controller/BaseController/productController.js';
import { signup } from '../Controller/AuthController/registration.js';
import { Login } from '../Controller/AuthController/login.js';
const router=express.Router();

router.get('/product',allProducts)
router.get('/product/:id',getproductById)
router.get('/product/category',getProductsBycategory)
router.post('/signup',signup)
router.post('/login',Login)




export default router