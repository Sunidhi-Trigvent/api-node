import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    colors: { type: [String], required: true },
    image: { type: [], required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    featured: { type: Boolean, required: true },
    stock: { type: Number, required: true },
    reviews: { type: Number, required: true },
    stars: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default productSchema;
