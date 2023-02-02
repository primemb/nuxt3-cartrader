<script setup lang="ts">
import { Car } from "~~/models/car";
const props = defineProps<{ cars: Car[] }>();

const favorite = useLocalStorage<any>("favorite", {});

const handleFavorite = (id: any) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>
<template>
  <div class="w-full">
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handleFavorite"
      :favored="car.id in favorite"
    />
  </div>
</template>
