import mongoose from 'mongoose';
import Productschema from '../../Modal/ProductSchema/productSchema.js';
import { handleError } from '../../utils/handleError.js';

export const getProductsBycategory = async (req, res) => {
    
        const { category } = req.body;
        if (!category) {
            return res.status(400).json({ success: false, message: "Category not defined" });
        }
        const products = await Productschema.find({ category} );
        if (products.length === 0) {
            return res.status(404).json({ success: false, message: "No products available for the given category" });
        }
        return res.status(200).json({ success: true, data: products, message: "Products fetched successfully" });
    
};




export const getproductById= async(req,res)=>{
    
        const productId=req.params.id;
        if(!mongoose.Types.ObjectId.isValid(productId)){
            res.status(400).json({success:false,message:`No product found`})
        }
        const getproductId=await Productschema.findById(productId)
        if(!getproductId){
            return res.status(400).json({success:false,message:`product not available ${productId}`})
        }
        
        res.status(200).json({success:true,data:getproductId,message:`product fetched by id successfully`})
    
}



export const allProducts=async(req,res)=>{
    
        let getProducts
        getProducts=await Productschema.find();
        res.status(200).json({success:true,data:getProducts,message:"feth all products"})
    
}