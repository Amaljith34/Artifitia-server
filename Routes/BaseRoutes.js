import express from 'express';
import { allProducts, getproductById, getProductsBycategory } from '../Controller/BaseController/productController.js';
import { signup } from '../Controller/AuthController/registration.js';
import { Login } from '../Controller/AuthController/login.js';
import { trycatch } from '../Middleware/tryCatch.js';
const router=express.Router();

router.get('/product',trycatch(allProducts))
router.get('/product/:id',trycatch(getproductById))
router.get('/product/category',trycatch(getProductsBycategory))
router.post('/signup',trycatch(signup))
router.post('/login',trycatch(Login))




export default router