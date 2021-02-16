<template>
  <div class="flex w-full h-24 mb-2 p-2 border items-center ">
    <div class="w-1/6 flex justify-center">
      <img
        class="w-full h-20 object-contain object-center"
        :src="updateImage"
        alt=""
      />
    </div>
    <div class="w-3/6 text-center">{{ item.product.title }}</div>
    <div class="w-1/6 text-center">{{ item.quantity }}</div>
    <div class="w-1/6 text-center">{{ item.product.price }}</div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["item"],
  computed: {
    updateImage() {
      return this.item.product.image.url
        .split("/uploads/")
        .join("https://mysterious-everglades-58663.herokuapp.com/uploads/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
