Task Manager App - 
A simple task manager web application built with React for the frontend, Express for the backend, and Axios for making HTTP requests. The app allows users to create, update, delete, and view tasks.

Table of Contents
Installation Steps and Setup Instructions

API Endpoints

Instructions for Testing the API using Postman

1. Installation Steps and Setup Instructions
Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js: Install Node.js

npm (Node Package Manager): Comes bundled with Node.js.

Frontend Setup (React):
npm create vite@latest
npm install
Navigate to the frontend directory:
cd frontend
Install the dependencies:
Run the development server:
npm start
This will start the React app on http://localhost:5173.

Backend Setup (Express)
In the root directory of the project (where server.js is located), install the backend dependencies:

npm install
Start the backend server:

npm run dev
The backend will be running on http://localhost:5000.

Full Stack
Frontend: React app running on port 5173.

Backend: Express API running on port 5000.

Ensure both are running simultaneously for the application to work properly.

2. API Endpoints
Here are the available API endpoints for managing tasks in the system.

1. GET /tasks
Request: No request body needed.

Response: A list of all tasks.

Example response:

json
[
  {
    "id": 1,
    "title": "Task 1",
    "description": "This is the first task"
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "This is the second task"
  }
]
2. POST /tasks
Request: A JSON object with title and description.

Example request body:

json
{
  "title": "New Task",
  "description": "This is a new task"
}
Response: The created task with an id field.

Example response:

json
{
  "id": 3,
  "title": "New Task",
  "description": "This is a new task"
}
3. PUT /tasks/:id
Request: A JSON object with title, description, and completed fields. The id is specified in the URL.

Example request body:

json
{
  "title": "Updated Task",
  "description": "This is an updated task",
  "completed": true
}
Response: The updated task.

Example response:

json
{
  "id": 1,
  "title": "Updated Task",
  "description": "This is an updated task",
  "completed": true
}
4. DELETE /tasks/:id
Request: No request body is needed. The id of the task to be deleted is passed in the URL.

Response: The deleted task object.

Example response:

json
{
  "id": 1,
  "title": "Task 1",
  "description": "This is the first task"
}
3. Instructions for Testing the API using Postman
You can use Postman to test these API endpoints. Here's how to test each of them:

1. GET /tasks
Open Postman and create a GET request.

Enter the following URL:
http://localhost:5000/tasks

Click Send. You should see a response with the list of tasks.

2. POST /tasks
Open Postman and create a POST request.

Enter the following URL:
http://localhost:5000/tasks

In the Body tab, select raw and JSON format, then enter the following JSON:

json
{
  "title": "New Task",
  "description": "This is a new task"
}
Click Send. You should see a response with the created task including the id.

3. PUT /tasks/:id
Open Postman and create a PUT request.

Enter the following URL (replace :id with the actual task ID): http://localhost:5000/tasks/1

In the Body tab, select raw and JSON format, then enter the following JSON:

json
{
  "title": "Updated Task",
  "description": "This is an updated task",
  "completed": true
}
Click Send. You should see a response with the updated task.

4. DELETE /tasks/:id
Open Postman and create a DELETE request.

Enter the following URL (replace :id with the actual task ID): http://localhost:5000/tasks/1

Click Send. You should see a response with the deleted task details.

Additional Notes
Make sure to run both the frontend (React app) and backend (Express API) servers simultaneously for the app to work properly.

You can modify the fetchTasks function or use additional features (like pagination) based on your use case.

UI Screen Shots Links of the project:
https://drive.google.com/drive/folders/1fpaHHbC1VVuDftQid9KJRCZZAmF_H2Ii
