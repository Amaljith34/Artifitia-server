
import Wishlist from "../../Modal/WishListSchema/wishListSchema.js";

export const AddWishlist= async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;
  console.log(productId);
  

  try {
    let wishlist = await Wishlist.findOne({ id });
    console.log(wishlist);
    
    if (!wishlist) {
      wishlist = new Wishlist({ userId:id, products: [] });
      console.log(wishlist);
      
    }

    const productExists = wishlist.products.some(
      (product) => product.productId.toString() === productId
    );

    if (productExists) {
      return res.status(400).json({ message: "Product already in wishlist." });
    }
    wishlist.products.push({ productId });
    await wishlist.save();

    res.status(200).json({ message: "Product added to wishlist.", data:wishlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export const GetWishlist= async (req, res) => {
  const { id } = req.params;
  try {
    const userId=id
    const wishlist = await Wishlist.findOne({ userId }).populate("products.productId");
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found." });
    }

    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export const RemoveWishlist = async (req, res) => {
  const { id } = req.params; 
  const { productId } = req.body;

  try {
    
    const wishlist = await Wishlist.findOne({ userId: id });
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found." });
    }

   
    wishlist.products = wishlist.products.filter(
      (product) => product.productId != productId
    );

    await wishlist.save();

    res.json({ message: "Product removed from wishlist.", wishlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

