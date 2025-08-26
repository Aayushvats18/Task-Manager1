import React from "react";

const TaskItem = ({ task }) => {
  const handleDelete = () => {
  };

  return (
    <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md">
      <span className="text-lg text-gray-800">{task.title}</span>

      <button
        onClick={handleDelete}
        className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
