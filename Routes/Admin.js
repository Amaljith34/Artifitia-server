import express from 'express';
import { addProduct } from '../Controller/AdminController/ProductController.js';

const router=express.Router();

router.post('/admin/product',addProduct)




export default router