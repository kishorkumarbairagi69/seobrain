import { Request, Response } from "express";
import { getPageTrafficHistory } from "../../services/pageTraffic.service";

export async function pageTrafficHistoryController(
  _req: Request,
  res: Response
) {
  try {
    const jobs = await getPageTrafficHistory();

    res.json({
      success: true,
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch history",
    });
  }
}