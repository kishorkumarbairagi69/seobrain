import { Request, Response } from "express";
import { getJobStats } from "../services/job.service";

export async function getJobStatsController(
  _req: Request,
  res: Response
) {
  try {
    const stats = await getJobStats();

    res.json({
      success: true,
      ...stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch stats",
    });
  }
}