export default async (city: string, filters: { [key: string]: string }) => {
  const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
    params: { ...filters },
  });
  if (error.value) {
    console.log(error);

    throw createError({
      ...error.value,
      statusCode: 500,
      statusMessage: "Unable to fetch cars",
    });
  }

  return { data, refresh };
};
