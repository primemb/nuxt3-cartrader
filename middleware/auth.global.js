export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes("profile")) {
    const user = useSupabaseUser();
    if (user.value) return;
    else return navigateTo("/login");
  }
});
