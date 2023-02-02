import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  return await prisma.car.findMany({ where: { listerId: userId } });
});
