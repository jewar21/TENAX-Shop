import { IProduct } from "@/interfaces";
import mongoose, { Schema, model, Model } from "mongoose";

const productSchema = new Schema(
  {
    description: { type: "string", required: true },
    images: [{ type: "string" }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: "string",
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "{VALUE} no es un tamaño válido"
        }
      }
    ],
    slug: { type: "string", required: true, unique: true },
    tags: [{ type: "string" }],
    title: { type: "string", required: true },
    type: {
      type: "string",
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} no es un tipo válido"
      }
    },
    gender: {
      type: "string",
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "{VALUE} no es un genero válido"
      }
    }
  },
  {
    timestamps: true
  }
);

// TODO: Crear indice de Mongo

const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
