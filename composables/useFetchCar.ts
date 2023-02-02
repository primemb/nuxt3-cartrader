export default async (id: number | string) => {
  const { data, error } = await useFetch(`/api/car/${id}`);
  if (error.value) {
    console.log(error.value);

    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.statusMessage,
    });
  }
  return { data };
};
