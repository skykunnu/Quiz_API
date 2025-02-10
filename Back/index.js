import express from "express"
import "dotenv/config"
import mongoose from "mongoose"
import cors from "cors"
import { connectToDB } from "./connection/userDB.js"
import quizRouter from "./routes/quizRouter.js"


const app=express();
const PORT=process.env.PORT;

app.use(cors({
    origin:process.env.FRONTEND_PATH,
    method:["GET","POST","PUT","PATCH","DELETE"],
    Credential:true
}))


await connectToDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/quiz",quizRouter)


app.listen(PORT,()=>{
    console.log("Server started at port-"+PORT);
})

