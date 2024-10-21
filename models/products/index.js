import mongoose from "mongoose";
import productSchema from "./schema.js";

const product = mongoose.model("products", productSchema);

export default product;
