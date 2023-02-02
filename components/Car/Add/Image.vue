<script setup>
const image = useState("carImage", () => {
  return {
    preview: null,
    image: null,
  };
});

const emits = defineEmits(["changeInput"]);

const onImageUpload = (event) => {
  const input = event.target;
  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    };
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits("changeInput", input.files[0], "image");
  }
};
</script>

<template>
  <div class="md:grid-cols-5 mt-2 w-[100%]">
    <label class="text-cyan-500 mb-1 text-sm">Image*</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            type="file"
            accept="image/*"
            class="opacity-0 absolute cursor-pointer"
            @change="onImageUpload"
          />
          <span class="cursor-pointer">Browser File</span>
        </div>
        <div class="border p-2 mt-3 w-56" v-if="image.preview">
          <img :src="image.preview" alt="preview" class="max-w-full h-auto" />
        </div>
      </div>
    </form>
  </div>
</template>
