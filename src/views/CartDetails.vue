<template>
  <div class="cart px-10">
    <h1 v-if="!cart.length" class="text-6xl text-center">Your cart is empty</h1>
    <CartItem v-for="item in cart" :key="item.product.id" :item="item" />
    <div class="cart-total-price w-full flex justify-end" v-if="cart.length">
      <div class="w-40">
        <h1 class="font-semibold text-center">Total</h1>
        <hr />
        <div
          class="h-10 w-full my-2 border bg-gray-800 mx-1 rounded-tr-full rounded-bl-full flex justify-center items-center"
        >
          <h1 class="text-center text-gray-100">${{getCartTotalPrice}} </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem";
export default {
  name: "CartDetails",
  components: {
    CartItem,
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    getCartTotalPrice(){
        return this.$store.getters.totalPrice
    }
  },
};
</script>

<style scoped></style>
