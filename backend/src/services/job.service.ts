import prisma from "../lib/prisma";

export async function getJobStats() {
  const totalJobs = await prisma.job.count();

  const runningJobs = await prisma.job.count({
    where: {
      status: "RUNNING",
    },
  });

  const completedJobs = await prisma.job.count({
    where: {
      status: "COMPLETED",
    },
  });

  const failedJobs = await prisma.job.count({
    where: {
      status: "FAILED",
    },
  });

  return {
    totalJobs,
    runningJobs,
    completedJobs,
    failedJobs,
  };
}