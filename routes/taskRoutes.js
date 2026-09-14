import express, { response } from "express";
import { getAllTasks, createTask } from "../src/db/tasks.js";

const router = express.Router();

router.get("/", (request, response) => {
  response.json(getAllTasks());
});

router.post("/", (request, response) => {
  const task = createTask(request.body);
  console.log("Task har skapat", task);
  response.status(201).json(task);
});

export default router;
