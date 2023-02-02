import { PrismaClient } from "@prisma/client";

import Zod from "zod";
const prisma = new PrismaClient();

const schema = Zod.object({
  email: Zod.string().email(),
  phone: Zod.string().regex(/^[0-9]+$/),
  name: Zod.string(),
  message: Zod.string(),
});

export default defineEventHandler(async (event) => {
  const { listingId } = event.context.params;
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

  const { message, email, phone, name } = body;

  return await prisma.message.create({
    data: {
      message,
      name,
      phone,
      email,
      listingId: parseInt(listingId),
    },
  });
});
