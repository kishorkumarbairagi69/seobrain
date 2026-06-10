import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { getJobStatsController } from "../controllers/job.controller";

const router = Router();

router.get(
  "/",
  authenticateToken,
  getJobStatsController
);

export default router;