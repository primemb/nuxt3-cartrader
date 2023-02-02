<template>
  <div
    class="relative h-screen w-full bg-no-repeat bg-cover bg-bottom bg-[url('https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg')]"
  >
    <div class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-10 text-white">Find your drive</h1>
        <CarSearchBar />
      </div>
    </div>
    <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
  </div>
</template>
