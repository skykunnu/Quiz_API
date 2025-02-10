import express from "express";
import { registerUser } from "../controller/user.js";
import { getCategories, addCategory } from "../controller/category.js";
import {
  addQuestion,
  getQuestion,
  getQuestionByCat,
} from "../controller/question.js";



const quizRouter = express.Router();

quizRouter.post("/user/save", registerUser);
quizRouter.get("/category/get", getCategories);
quizRouter.post("/category/save", addCategory);
quizRouter.post("/question/save", addQuestion);
quizRouter.get("/question/get", getQuestion);
quizRouter.get("/question/get/:category", getQuestionByCat);




export default quizRouter;
