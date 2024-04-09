import mongoose from "mongoose";

const { Schema } = mongoose

const backpackSchema = new Schema({
    brand: { type: String, required: true },
    image: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    defaultPrice: { type: Number, required: true },
    inStock: { type: Number, required: true },
    capacity: { type: String, required: true },
})

export const Backpack = mongoose.model('Backpack', backpackSchema)