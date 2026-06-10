import { Request, Response } from "express";
import { assignUserToProject } from "../../services/project.service";

export async function assignProjectController(
  req: Request,
  res: Response
) {
  try {
    const { userId } = req.body;

    const projectId = req.params.id as string;

    const assignment =
      await assignUserToProject(
        userId,
        projectId
      );

    res.status(201).json({
      success: true,
      assignment,
    });
  } catch {
    res.status(400).json({
      success: false,
      message: "Assignment failed",
    });
  }
}