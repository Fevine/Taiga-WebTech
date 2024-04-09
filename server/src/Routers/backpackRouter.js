import express from "express";
import { CreateBackpack, DeleteBackpackByID, GetAllBackpacks, GetBackpackByID } from "./../Controllers/backpackController.js";

export const backpackRouter = express.Router()


// Post

backpackRouter.post('/CreateBackpack', CreateBackpack)


// Get

backpackRouter.get('/GetBackpacks', GetAllBackpacks)
backpackRouter.get('/GetBackpack/:id', GetBackpackByID)


// Delete

backpackRouter.delete('/DeleteBackpack/:id', DeleteBackpackByID)
