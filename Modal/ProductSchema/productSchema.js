
import mongoose from "mongoose";
 const productSchema= new mongoose.Schema(
    {
        product_name:{
            type:String,
            required:true
        },
        imageSrc:{
            type:String,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yiINd-ddL4DzY2uTmp5IRRpOmu9aSFF-uw&s"
        },
        imageAlt:{
            type:String,
            default:'image'
        },
        description:{
            type:String,
            default:'description'
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        subcategory:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            default:1
            
        },
        stoke:{
            type:Number,
            default:10
        },
        isDeleted:{
            type:Boolean,
            default:false
        },
        
        rating:{
            type:Number,
            default:5
           
        }
    },
    {
        timestamps:true
    }
)

const Productschema = mongoose.model('Products', productSchema); // Ensure 'Products' matches the model name
export default Productschema;