import express from 'express';
import { addProduct, deleteProduct, updateProduct } from '../Controller/AdminController/ProductController.js';
import { trycatch } from '../Middleware/tryCatch.js';

const router=express.Router();

router.route('/admin/product')
.post(trycatch(addProduct))
.patch(trycatch(updateProduct))
.delete(trycatch(updateProduct))




export default router