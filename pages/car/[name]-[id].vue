<script setup lang="ts">
const route = useRoute();
const { capitalizeFirstLetter } = useUtilities();
useHead({ title: capitalizeFirstLetter(route.params.name as string) });

const id = computed(() => route.params.id);
const { data: car } = await useFetchCar(id.value as string);

definePageMeta({ layout: "custom" });
</script>

<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
