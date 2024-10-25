import { cart } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const { body } = req;
    const cartItem = new cart(body);
    await cartItem.save();
    res.send("successfully added product in cart ");
  } catch (error) {
    res.status(403).send(error);
  }
};
