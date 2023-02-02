<script setup>
const user = useSupabaseUser();
const logout = async () => {
  const supabase = useSupabaseAuthClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
};
</script>

<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center border-b bg-white p-4 shadow-md"
  >
    <NuxtLink to="/" class="text-3xl font-mono">cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
</template>
