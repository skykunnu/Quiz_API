import { Category } from "../models/categoryModel.js";
import { question } from "../models/questionModel.js";

export async function addQuestion(req, res) {
  try {
    const Question = new question(req.body);
    await Question.save();
    res.status(201).send({ message: "Question Created" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Erorr adding question", message: error.message });
  }
}

export async function getQuestion(req, res) {
  try {
    const Question = await question.find({});

    if (!Question || Question.length === 0) {
      return res.status(400).send({ error: "No categories found" });
    }
    return res.send(Question);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error fetching questions", message: error.message });
  }
}

export async function getQuestionByCat(req, res) {
  try {
    let query = {};
    const { category } = req.params; // It is giving us category name ex- Programming, Entertainment.
    if (!category) {
      return res.status(400).send({ error: "Not a valid categories" });
    }

    const categoryExist = Category.find({ name: category });

    if (!categoryExist) {
      return res.status(400).send({ error: "categories doesn't exist" });
    }

    query.category = category;

    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const Question = await question.find(query).skip(skip).limit(limit);
    // const Question = await question.find({ category });

    if (!Question || Question.length === 0) {
      return res.status(400).send({ error: "No Questions found" });
    }

    const totalQuestions = await question.countDocuments(query);
    return res.send({
      Question,
      currentPage: page,
      totalPages: Math.ceil(totalQuestions / limit),
    });
  } catch (error) {
    return res.status(500).send({
      error: "Error fetching questions by category",
      message: error.message,
    });
  }
}
