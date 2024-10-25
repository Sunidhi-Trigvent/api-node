import { cart } from "../../../models/index.js";

export default async (req, res) => {
  const { user } = req;
  const cartItems = await cart
    .find({ userId: user._id })
    .populate("userId")
    .populate("productId");
  res.send({ cartItems });
};
