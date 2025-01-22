import Categorys from "../../Modal/CategorySchema/categorySchema.js";
import SubCategory from "../../Modal/SubCategorySchema/subcategorySchema.js";


export const FetchSubCategory = async (req, res) => {
  try {
  
    const categories = await Categorys.find({ isDeleted: false })
      .populate('subcategories'); 

    res.status(200).json({
      success: true,
      message: 'Success',
      data: categories,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories with subcategories',
      error: err.message,
    });
  }
};


  

  export const AddSubCategory = async (req, res) => {
    const { name, categoryId } = req.body;
    if (!categoryId) {
        return res.status(400).json({ success: false, message: 'Category ID is required.' });
    }

    try {
    
        const existingSubCategory = await SubCategory.findOne({ name: name.trim() });
        if (existingSubCategory) {
            return res.status(400).json({ success: false, message: 'Subcategory already exists.' });
        }

   
        const newSubCategory = new SubCategory({
            name: name,
            categoryId,
            isDeleted: false,
        });

        await newSubCategory.save();

        await Categorys.findByIdAndUpdate(categoryId, {
            $push: { subcategories: newSubCategory._id }, 
        });
        console.log(newSubCategory);
        

        res.status(201).json({
            success: true,
            message: 'Subcategory added successfully.',
            data: newSubCategory,
            
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while adding the subcategory.',
            error: err.message,
        });
    }
};


export const GetSubCategory=async(req,res)=>{
        try {
          
          const categories = await SubCategory.find({ isDeleted: false })
            
      
          res.status(200).json({
            success: true,
            message: 'Success',
            data: categories,
          });
        } catch (err) {
          res.status(500).json({
            success: false,
            message: 'Failed to fetch categories with subcategories',
            error: err.message,
          });
        }
      };
      
