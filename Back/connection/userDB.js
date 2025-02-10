import mongoose from "mongoose"
import 'dotenv/config'


export async function connectToDB(){
await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.dlqaa.mongodb.net/Quiz_App?retryWrites=true&w=majority&appName=Cluster0`);
}

