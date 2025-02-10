import mongoose from "mongoose"

const categorySchema=new mongoose.Schema({
    name:{type: String, required:true , unique:true} // unique:true so that no two same categories are created. 
})

export const Category=mongoose.model("Category",categorySchema)