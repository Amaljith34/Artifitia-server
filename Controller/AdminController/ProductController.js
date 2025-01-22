
import mongoose from "mongoose";
import { addProductValidation, updateproductValidation } from "../../Middleware/productValidation.js";
import ProductSchema from "../../Modal/ProductSchema/productSchema.js";
import Category from "../../Modal/CategorySchema/categorySchema.js";

export const addProduct = async (req, res) => {
  try {

    const validatedProduct = await addProductValidation.validateAsync(req.body);
    
      if (validatedProduct.product_name && typeof validatedProduct.product_name === 'string') {
      validatedProduct.product_name = validatedProduct.product_name.trim();
    } else {
      return res.status(400).json({ success: false, message: "Product name is invalid." });
    }

    const product_name= validatedProduct.product_name
   
    
    const existingProduct = await ProductSchema.findOne({ product_name});
    if (existingProduct) {
      return res.status(400).json({ success: false, message: "Product already exists." });
    }
    const CategoryId=validatedProduct.category
    const categoryData = await Category.findById(CategoryId);
    if (!categoryData) {
      return res.status(401).json({ success: false, message: "Invalid category." });
    }
    const newProduct = new ProductSchema({
      ...validatedProduct
    });
    await newProduct.save();
    res.status(200).json({
      success: true,
      message: "Product added successfully.",
      data: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};



export const updateProduct=async(req,res)=>{
  
    const productId=req.params.id;
    const productUpdate=req.body;
    if(!mongoose.Types.ObjectId.isValid(productId)){
      return res.status(400).json({success:false,message:"Invalid product id"})
    }
   const validatedProduct= await updateproductValidation.validateAsync(productUpdate)
    const updateDProduct=await ProductSchema.findByIdAndUpdate(productId,validatedProduct,{new:true})
    if(!updateDProduct){
      return res.status(404).json({success:false,message:"product not update"})
    }
    res.status(200).json({success:true,message:"Product updated successfully",updateDProduct})
  
}

export const hideProduct=async(req,res)=>{
  
    const productId=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(productId)){
      return res.status(400).json({success:false,message:"Invalid product id"})
    }
    const product = await ProductSchema.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    const togleshow=!product.isShow;
    const hidedProduct=await ProductSchema.findByIdAndUpdate(productId,{ isShow: togleshow },{ new: true })
   if(!hidedProduct){
    return res.status(404).json({success:false,message:"Product not found"})
   }
   res.status(200).json({success:true,message:"Product hide successfully",data:hideProduct})
  
}


export const deleteProduct = async (req, res) => {
  
    const productId = req.params.id;

      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ success: false, message: "Invalid product id" });
      }

    const deleteProduct = await ProductSchema.findByIdAndDelete(productId);

    if (!deleteProduct) {
      return res.status(400).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({success: true,message: "Product deleted successfully",data: deleteProduct,});
  
};

