<template>
  <div
    class="card w-full h-72 shadow transform hover:scale-105 transition-transform duration-300 cursor-pointer"
  >
    <div class="h-4/6 w-full p-2">
      <img
        class="w-full h-full object-contain object-center"
        :src="updateImage"
        alt=""
      />
    </div>
    <div class="h-2/6 w-full py-1 flex flex-col justify-evenly">
      <div class=" ">
        <h1 class="product__name text-lg font-semibold text-center">
          <router-link :to="{ name: 'Product', params: { id: product.id } }">
            {{ product.title }}
          </router-link>
        </h1>
        <h3 class="text-sm text-center text-gray-600">
          {{ product.subtitle }}
        </h3>
      </div>
      <div class="flex justify-evenly mx-2">
        <div
          class="h-full w-full border bg-gray-800 mx-1 rounded-tr-full rounded-bl-full"
        >
          <h1 class="text-center text-gray-100">${{ product.price }}</h1>
        </div>
        <button
          class="text-center text-sm w-full h-full border border-gray-700 p-1 hover:bg-gray-700 hover:text-gray-100 transition duration-500 focus:outline-none "
        @click="addToCart"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  computed: {
    updateImage() {
      return this.product.image.url
        .split("/uploads/")
        .join("https://mysterious-everglades-58663.herokuapp.com/uploads/");
    },
  },
  methods:{
    addToCart(){
      this.$store.dispatch('addProductToCart',{product:this.product,quantity:1})
    }
  }
};
</script>

<style scoped>
h1 > a {
  position: relative;
  color: #000;
  text-decoration: none;
}

h1 > a:hover {
  color: #000;
}
h1 > a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

h1 > a:hover::after {
  visibility: visible;
  transform: scaleX(1);
}
</style>
