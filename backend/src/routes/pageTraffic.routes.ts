import { Router } from "express";

import { authenticateToken } from "../middleware/auth.middleware";

import { runPageTrafficController } from "../controllers/pageTraffic/run.controller";
import { pageTrafficHistoryController } from "../controllers/pageTraffic/history.controller";

const router = Router();

router.post(
  "/run",
  authenticateToken,
  runPageTrafficController
);

router.get(
  "/history",
  authenticateToken,
  pageTrafficHistoryController
);

export default router;