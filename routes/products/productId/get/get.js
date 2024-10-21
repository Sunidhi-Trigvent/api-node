import { product } from "../../../../models/index.js";

export default async (req, res) => {
  try {
    const { productId } = req;
    console.log(productId);
    const productDetails = await product.findOne({ _id: productId });
    res.send(productDetails);
  } catch (error) {
    res.status(403).send(error);
  }
};
