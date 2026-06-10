import { Request, Response } from "express";
import { getProjects } from "../../services/project.service";

export async function listProjectsController(
  _req: Request,
  res: Response
) {
  try {
    const projects = await getProjects();

    res.json({
      success: true,
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch projects",
    });
  }
}