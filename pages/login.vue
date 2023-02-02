<script setup>
definePageMeta({ layout: "custom" });

const email = ref("");
const password = ref("");
const error = ref(null);
const login = async () => {
  const supabase = useSupabaseAuthClient();
  const { errorData, data } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (errorData) {
    console.log(errorData);
    error.value = errorData;
  } else {
    console.log(data);
    navigateTo("/");
  }
};
</script>

<template>
  <div class="mt-10 flex flex-col justify-center items-center w-full">
    <h1 class="text-5xl font-bold mb-7">Log in</h1>
    <div class="flex flex-col gap-4 w-full max-w-[600px]">
      <input
        type="text"
        class="border p-3"
        v-model="email"
        placeholder="email"
      />
      <input
        type="password"
        class="border p-3"
        v-model="password"
        placeholder="password"
      />
      <button
        @click="login"
        class="bg-blue-400 p-3 rounded text-white font-bold"
      >
        Login
      </button>
    </div>
  </div>
</template>
