import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { backpackRouter } from "./src/Routers/backpackRouter.js";

dotenv.config()

const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
const CON_URL = process.env.CON_URL.replace('<password>', PASSWORD)

const app = express()

app.use(cors())
app.use(express.json())


app.use('/Backpack', backpackRouter)


mongoose.connect(CON_URL).catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`Server online at ${PORT} port!`);
})
