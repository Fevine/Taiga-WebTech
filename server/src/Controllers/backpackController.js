import { Backpack } from "./../Models/backpackModel.js";


// Post

export const CreateBackpack = async (req, res) => {
    try {
        const { image, brand, size, color, price, count, capacity } = req.body
        const newBackpack = await Backpack.create({
            image: image,
            brand: brand,
            color: color,
            size: size,
            defaultPrice: price,
            capacity: capacity,
            inStock: count
        })
        res.status(200).json({ message: `${newBackpack.brand} created successfully!` })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' })
    }
}


// Get

export const GetAllBackpacks = async (req, res) => {
    try {
        const backpacks = await Backpack.find()
        res.status(200).json({ message: `Backpacks successfully fetched!`, data: backpacks })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

export const GetBackpackByID = async (req, res) => {
    try {
        const { id } = req.params
        const backpack = await Backpack.findById(id)
        res.status(200).json({ message: `${backpack.brand} successfully fetched!`, data: backpack })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' })
    }
}


// Delete

export const DeleteBackpackByID = async (req, res) => {
    try {
        const { id } = req.params
        const backpack = await Backpack.findByIdAndDelete(id)
        res.status(200).json({ message: `${backpack.brand} successfully deleted!` })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' })
    }
}
