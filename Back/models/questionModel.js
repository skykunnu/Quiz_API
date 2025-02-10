import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  options: [{ type: String, required: true }],
//   category: { type: mongoose.Schema.Types.ObjectID, ref: "Category" },
// Below is the schema to find category on the basis of names. 
category:{
    type:String,
    required:true
}
});

export const question = mongoose.model("question", questionSchema);
