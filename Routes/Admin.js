import express from 'express';
import { addProduct, deleteProduct, updateProduct } from '../Controller/AdminController/ProductController.js';

const router=express.Router();

router.route('/admin/product')
.post(addProduct)
.patch(updateProduct)
.delete(deleteProduct)




export default router