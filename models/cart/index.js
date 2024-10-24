import mongoose from "mongoose";
import cartSchema from "./Schema.js";

const cart = mongoose.model("cart", cartSchema);

export default cart;
