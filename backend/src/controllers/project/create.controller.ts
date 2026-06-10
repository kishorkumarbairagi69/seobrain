import { Request, Response } from "express";
import { createProject } from "../../services/project.service";

export async function createProjectController(
  req: Request,
  res: Response
) {
  try {
    const { name, description } = req.body;

    const project = await createProject(
      name,
      description
    );

    res.status(201).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to create project",
    });
  }
}