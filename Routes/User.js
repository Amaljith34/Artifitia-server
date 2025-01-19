import express from 'express';
import { signup } from '../Controller/AuthController/registration.js';
import { Login } from '../Controller/AuthController/login.js';

const router=express.Router();

router.post('/signup',signup)
router.post('/login',Login)



export default router