import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);
  const filters: {
    city: string;
    make?: string;
    price?: { gte?: number; lte?: number };
  } = {
    city: city.toLowerCase(),
  };

  if (make) {
    filters.make = make as string;
  }

  if (minPrice || maxPrice) {
    filters.price = {};
    if (minPrice) {
      filters.price.gte = parseInt(minPrice as string);
    }
    if (maxPrice) {
      filters.price.lte = parseInt(maxPrice as string);
    }
  }

  return await prisma.car.findMany({
    where: filters,
  });
});
