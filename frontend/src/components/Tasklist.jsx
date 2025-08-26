import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://task-manager1-nf7h.onrender.com");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSave = (task) => {
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
      );
      setEditingTask(null);
    } else {
      setTasks((prevTasks) => [task, ...prevTasks]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://task-manager1-nf7h.onrender.com/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-8 drop-shadow-sm">
        Task Manager ✅
      </h1>

      {/* Form */}
      <div className="mb-6">
        {editingTask ? (
          <TaskForm task={editingTask} onSave={handleSave} />
        ) : (
          <TaskForm onSave={handleSave} />
        )}
      </div>

      {/* Task List */}
      <div className="mt-8">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center italic">No tasks available</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="card-modern fade-in flex justify-between items-center p-4"
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {task.title}
                  </h3>
                  <p className="text-gray-600">{task.description}</p>
                </div>
                <div className="flex space-x-3">
                  <button
                    className="px-4 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    onClick={() => setEditingTask(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskList;
