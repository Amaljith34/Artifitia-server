import express from 'express';
import { allProducts, getproductById, getProductsBycategory, searchProducts } from '../Controller/BaseController/productController.js';
import { signup } from '../Controller/AuthController/registration.js';
import { Login } from '../Controller/AuthController/login.js';
import { trycatch } from '../Middleware/tryCatch.js';
import { AddWishlist, GetWishlist, RemoveWishlist } from '../Controller/UserController/WishlistController.js';
const router=express.Router();

router.get('/product',trycatch(allProducts))
router.get('/products',searchProducts)
router.get('/product/:id',trycatch(getproductById))
router.get('/product/category',trycatch(getProductsBycategory))
router.post('/signup',trycatch(signup))
router.post('/login',trycatch(Login))

router.route('/wishlist/:id')
.post(AddWishlist)
.get(GetWishlist)
.delete(RemoveWishlist)




export default router