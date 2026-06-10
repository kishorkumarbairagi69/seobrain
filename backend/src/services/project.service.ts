import prisma from "../lib/prisma";

export async function createProject(
  name: string,
  description?: string
) {
  return prisma.project.create({
    data: {
      name,
      description,
    },
  });
}

export async function getProjects() {
  return prisma.project.findMany({
    include: {
      users: true,
      jobs: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProjectById(
  projectId: string
) {
  return prisma.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      users: {
        include: {
          user: true,
        },
      },
      jobs: true,
    },
  });
}

export async function assignUserToProject(
  userId: string,
  projectId: string
) {
  return prisma.userProject.create({
    data: {
      userId,
      projectId,
    },
  });
}