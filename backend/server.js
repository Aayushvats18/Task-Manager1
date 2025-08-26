

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import taskRoutes from "./routes/task.routes.js"; 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

