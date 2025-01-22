import express from 'express';
import { addProduct, updateProduct } from '../Controller/AdminController/ProductController.js';
import { trycatch } from '../Middleware/tryCatch.js';
import { AddCategory, AllCategory } from '../Controller/AdminController/categoryController.js';
import { AddSubCategory,FetchSubCategory, GetSubCategory } from '../Controller/AdminController/subCategoryController.js';

const router=express.Router();

router.route('/admin/product')
.post(addProduct)
.patch(trycatch(updateProduct))
.delete(trycatch(updateProduct))

router.route('/admin/category')
.post(AddCategory)
.get(AllCategory)
router.get('/admin/subcategori',GetSubCategory)
router.route('/admin/subcategory')
.post(AddSubCategory)
.get(FetchSubCategory)




export default router