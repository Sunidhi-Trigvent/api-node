import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  
  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },

  productQuantity: {
    type: "number",
  },

  productColor:{
    type: "string",
  },
},
  
{
  timestamps: true,
  });

export default cartSchema;
