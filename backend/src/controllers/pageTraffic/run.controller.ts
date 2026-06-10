import { Request, Response } from "express";
import { runPageTrafficJob } from "../../services/pageTraffic.service";

export async function runPageTrafficController(
  req: Request,
  res: Response
) {
  try {
    const { projectId, keyword, url } = req.body;

    const job = await runPageTrafficJob(
      projectId,
      keyword,
      url
    );

    res.status(201).json({
      success: true,
      message: "Job started successfully",
      jobId: job.id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to run job",
    });
  }
}