import express from 'express';
import { allProducts, getproductById, getProductsBycategory } from '../Controller/BaseController/productController.js';

const router=express.Router();

router.get('/product',allProducts)
router.get('/product/:id',getproductById)
router.get('/product/category',getProductsBycategory)




export default router