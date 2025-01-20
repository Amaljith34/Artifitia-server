
import Joi from 'joi';
export const addProductValidation = Joi.object({
    product_name: Joi.string().required(),
    price: Joi.number().required(),
    stoke: Joi.number(),
    category: Joi.string().required(),
    subcategory: Joi.string().required(),
    description: Joi.string().required(),
   
    imageSrc: Joi.string().required(),
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