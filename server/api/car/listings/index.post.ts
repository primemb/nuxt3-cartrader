import Zod from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Zod.object(
  {
    make: Zod.string(),
    model: Zod.string(),
    year: Zod.number()
      .min(1886)
      .max(new Date().getFullYear() + 1),
    miles: Zod.number().min(0),
    city: Zod.string().min(2),
    numberOfSeats: Zod.number().min(1).max(100),
    features: Zod.string().array(),
    image: Zod.string(),
    listerId: Zod.string(),
    price: Zod.number().min(0),
    name: Zod.string(),
    description: Zod.string(),
  },
  {
    invalid_type_error: "Body should be an object",
    required_error: "Body should be an object",
  }
);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = schema.safeParse(body);

  if (result.success === false) {
    const error = result.error;

    const customError = createError({
      statusCode: 412,
      statusMessage: `${error.errors[0].path} ${error.errors[0].message}`,
    });
    throw customError;
  }

  const {
    make,
    model,
    miles,
    year,
    name,
    city,
    description,
    features,
    image,
    listerId,
    numberOfSeats,
    price,
  } = result.data;

  const car = await prisma.car.create({
    data: {
      make,
      model,
      miles,
      name,
      city,
      description,
      features,
      image,
      listerId,
      numberOfSeats,
      price,
      year,
    },
  });

  return car;
});
