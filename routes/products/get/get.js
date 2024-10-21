import { product } from "../../../models/index.js";

export default async (req, res) => {
  const products = await product.find();
  res.send(products);
};
