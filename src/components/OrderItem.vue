<template>
  <div class="flex w-full h-24 mb-2 p-2 border items-center ">
    <div class="w-2/6 flex justify-center">
      <img
        class="w-20 h-20 object-contain object-center"
        :src="updateImage"
        alt=""
      />
    </div>
    <div class="w-3/6 text-center"> {{product.title}} </div>
    <div class="w-1/6 text-center">qty</div>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: ["product"],
  computed: {
    updateImage() {
      return this.product.image.url
        .split("/uploads/")
        .join("https://varotra-co.herokuapp.com/uploads/");
    },
  },
  mounted () {
    console.log(this.product);
  },
};
</script>

<style lang="scss" scoped></style>
