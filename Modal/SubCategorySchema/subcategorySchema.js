import mongoose from "mongoose";

const SubcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, 
      unique: true, 
      trim: true, 
    },
    categoryId: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Categorys',
          required: true },

    isDeleted: {
      type: Boolean,
      default: false, 
    },
  },
  {
    timestamps: true, 
  }
);

const SubCategory = mongoose.model("SubCategory", SubcategorySchema);
export default SubCategory;
