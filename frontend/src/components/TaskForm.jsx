
import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskForm({ task, onSave }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTaskName(task.title);
      setTaskDescription(task.description);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskName || !taskDescription) {
      alert("Both title and description are required.");
      return;
    }

    const newTask = {
      title: taskName,
      description: taskDescription,
    };

    try {
      let response;
      if (task) {
        // If task exists, update the task
        response = await axios.put(
          `http://localhost:5000/tasks/${task.id}`,
          newTask
        );
      } else {
        // If it's a new task, create it
        response = await axios.post("http://localhost:5000/tasks", newTask);
      }

      // Only call onSave after successfully adding/updating the task
      if (onSave && typeof onSave === "function") {
        onSave(response.data); // Call onSave with the updated task
      }

      // Clear the form after submission
      setTaskName("");
      setTaskDescription("");
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold">{task ? "Edit Task" : "Create Task"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Task Title"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <textarea
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          {task ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;



