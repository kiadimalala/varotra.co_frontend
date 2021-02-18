<template>
  <div class="h-full flex justify-evenly" v-if="product">
    <div class="w-full">
      <img
        class="w-full h-96 object-contain object-center"
        :src="updateImage"
        alt=""
      />
    </div>
    <div class="w-full">
      <div class="w-full">
        <h1
          class="w-auto h-12 text-2xl flex px-2 justify-center items-center text-gray-100 bg-gray-800 rounded-bl-full rounded-tr-full"
        >
          {{ product.title }}
        </h1>
        <div class="flex items-center h-10" v-if="product.subtitle">
          <hr class="w-40 border-gray-800 mx-2" />
          <h1>{{ product.subtitle }}</h1>
        </div>
      </div>
      <div class="description mt-5">
        <h1 class="text-lg font-bold">Descriptions</h1>
        <hr class="w-full border-gray-800 my-1" />
        <p class="my-4">
          {{ product.description }}
        </p>
      </div>
      <hr class="w-full my-2 border-gray-800" />
      <div class="flex justify-evenly items-center">
        <div
          class="h-10 w-20 bg-gray-800 flex justify-center items-center px-2 rounded-tr-full rounded-bl-full"
        >
          <h1 class="font-semibold text-gray-100">${{ product.price }}</h1>
        </div>
        <div>
          <button
            @click="addToCart"
            class="h-10 w-40 border border-gray-500 focus:outline-none "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductDetails",
  props: ["id"],
  computed: {
    ...mapState(["product"]),
    updateImage() {
      return this.product.image.url
        .split("/uploads/")
        .join("https://varotra-co.herokuapp.com/uploads/");
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
  created() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>

<style lang="scss" scoped></style>
