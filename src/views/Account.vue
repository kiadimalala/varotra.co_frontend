<template>
  <div class="account px-20 my-8 h-full flex ">
    <div class="user__info w-full mx-2">
      <h1 class="text-xl">Account information</h1>
      <hr />
      <h2 class="my-1">username : {{ user.username }}</h2>
      <h2 class="my-1">email: {{ user.email }}</h2>
    </div>
    <div class="user__info w-full mx-2 ">
      <div class="w-full">
        <h1 class="text-xl ">My order <span v-if="orders.length>0">({{ orders.length }})</span> </h1>
        <hr />
      </div>
      <div class=" w-full h-full overflow-y-auto">
        <Order v-for="order in orders" :key="order.id" :order="order" />
        <h1 v-if="orders.length < 1" class="text-center mx-1 text-xl">You have no order</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Order from "../components/Order";
import { mapState } from "vuex";
export default {
  name: "Account",
  components: {
    Order,
  },
  computed: {
    ...mapState(["user", "orders"]),
  },
  created() {
    this.$store.dispatch("getOrder");
  },
};
</script>

<style scoped></style>
