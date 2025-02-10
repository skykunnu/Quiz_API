import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";


export async function registerUser(req, res){
    

try{
    const user=new User(req.body);
    console.log(req.body);  
    await user.save();
    res.status(201).send({message:"User registered"})
}
catch(error){
    return res.status(500).send({error:"Error registering user",message: error.message});
}
}






