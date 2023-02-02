import { Car } from "~~/models/car";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event): Promise<Car> => {
  const { id } = event.context.params;

  const car = await prisma.car.findUnique({ where: { id: parseInt(id) } });
  if (!car) {
    throw createError({ statusCode: 404, statusMessage: "Car not found" });
  }

  return car;
});
