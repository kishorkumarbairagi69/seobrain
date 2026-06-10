import express from "express";
import cors from "cors";
import pageTrafficRoutes from "./routes/pageTraffic.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import projectRoutes from "./routes/project.routes";
import jobRoutes from "./routes/job.routes";

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

app.use("/api/page-traffic", pageTrafficRoutes);

app.use("/api/jobs", jobRoutes);

export default app;