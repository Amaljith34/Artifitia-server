
import Joi from 'joi';

export const addProductValidation = Joi.object({
  product_name: Joi.string().required(),
  price: Joi.number().required(),
  stock: Joi.number().default(10), 
  category: Joi.string().hex().length(24).required(), 
  subcategory: Joi.string().hex().length(24).required(), 
  description: Joi.string().default("description"),
  imageSrc: Joi.string().uri().default("https://via.placeholder.com/150"),
});


  export const updateproductValidation=Joi.object({
    product_name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    stoke: Joi.number(),
    category: Joi.string().required(),
    subcategory: Joi.string().required(),
    quantity: Joi.number().min(0),
    isDeleted: Joi.boolean(),
    imageSrc: Joi.string().uri(),
  })