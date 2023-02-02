<script setup lang="ts">
import { Car } from "~~/models/car";

const props = defineProps<{ listing: Car }>();
const emits = defineEmits(["deleteClick"]);
const config = useRuntimeConfig();
</script>

<template>
  <div class="shadow rouneded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img
        :src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
        :alt="listing.name"
        class="w-80 mr-3 h-44"
      />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-blue-400 mr-5"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p
        class="text-red-400 cursor-pointer"
        @click="emits('deleteClick', listing.id)"
      >
        Delete
      </p>
    </div>
  </div>
</template>
