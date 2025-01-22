import mongoose from "mongoose";

const Categoryschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }], 
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Categorys = mongoose.model("Categorys", Categoryschema);
export default Categorys;
