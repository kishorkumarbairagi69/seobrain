import { Router } from "express";

import { authenticateToken } from "../middleware/auth.middleware";
import { requireAdmin } from "../middleware/role.middleware";

import { createProjectController } from "../controllers/project/create.controller";
import { listProjectsController } from "../controllers/project/list.controller";
import { detailProjectController } from "../controllers/project/detail.controller";
import { assignProjectController } from "../controllers/project/assign.controller";

const router = Router();

router.post(
  "/",
  authenticateToken,
  createProjectController
);

router.get(
  "/",
  authenticateToken,
  listProjectsController
);

router.get(
  "/:id",
  authenticateToken,
  detailProjectController
);

router.post(
  "/:id/users",
  authenticateToken,
  requireAdmin,
  assignProjectController
);

export default router;