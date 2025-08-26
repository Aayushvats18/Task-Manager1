// task.model.js

let tasks = []; // In-memory storage for tasks

export const getTasks = () => {
  return tasks;
};

export const createTask = (title, description) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  return newTask;
};

export const updateTask = (id, title, description, completed) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return null; // Task not found
  }
  tasks[taskIndex] = { id, title, description, completed };
  return tasks[taskIndex];
};

export const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return null; // Task not found
  }
  const deletedTask = tasks.splice(taskIndex, 1);
  return deletedTask[0];
};

