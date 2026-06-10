import { Request, Response } from "express";
import { getProjectById } from "../../services/project.service";

export async function detailProjectController(
  req: Request,
  res: Response
) {
  try {
    const projectId = req.params.id as string;

    const project = await getProjectById(
      projectId
    );

    res.json({
      success: true,
      project,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    });
  }
}