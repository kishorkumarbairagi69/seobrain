import prisma from "../lib/prisma";
import logger from "../utils/logger";

export async function runPageTrafficJob(
  projectId: string,
  keyword: string,
  url: string
) {
  logger.info(
    `Starting Page Traffic job for ${keyword}`
  );

  const job = await prisma.job.create({
    data: {
      name: `Page Traffic - ${keyword}`,
      projectId,
      status: "RUNNING",
    },
  });

  await prisma.jobLog.create({
    data: {
      jobId: job.id,
      message: `Checking traffic for ${url}`,
    },
  });

  await prisma.job.update({
    where: {
      id: job.id,
    },
    data: {
      status: "COMPLETED",
    },
  });

  logger.info(
    `Page Traffic job completed: ${job.id}`
  );

  return job;
}

export async function getPageTrafficHistory() {
  return prisma.job.findMany({
    include: {
      logs: true,
      project: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}