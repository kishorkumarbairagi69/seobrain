import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import projectRoutes from "./routes/project.routes";

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Health Check
app.get("/", (_req, res) => {
  res.send("SEO Brain Pro API Running 🚀");
});

// Routes
app.use("/api/auth", authRoutes);

app.use("/api", userRoutes);

app.use("/api/projects", projectRoutes);

export default app;