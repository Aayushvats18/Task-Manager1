// task.routes.js

import express from "express";
const router = express.Router();
import * as taskModel from "../models/task.model.js"; 

// GET all tasks
router.get("/tasks", (req, res) => {
  const tasks = taskModel.getTasks();
  res.status(200).json(tasks);
});

// POST a new task
router.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }
  const newTask = taskModel.createTask(title, description);
  res.status(201).json(newTask);
});

// PUT (update) a task
router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const updatedTask = taskModel.updateTask(parseInt(id), title, description, completed);
  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(updatedTask);
});

// DELETE a task
router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const deletedTask = taskModel.deleteTask(parseInt(id));
  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(deletedTask);
});

export default router;

