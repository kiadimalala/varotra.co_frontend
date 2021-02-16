<template>
  <div class="order w-full border my-2 px-1">
    <div class="status p-1 flex justify-end ">
      <PaidOrder v-if="order.status === 'paid'" />
      <UnpaidOrder v-if="order.status === 'unpaid'" />
    </div>
    <OrderItem
      v-for="product in order.products"
      :key="product.id"
      :product="product"
    />
    <hr class="my-1" />
    <div
      class="h-full w-full border bg-gray-800  my-1 rounded-tr-full rounded-bl-full"
    >
      <h1 class="text-center text-gray-100">${{ order.total }}</h1>
    </div>
  </div>
</template>

<script>
import PaidOrder from "../components/PaidOrder";
import UnpaidOrder from "../components/UnpaidOrder";
import OrderItem from "../components/OrderItem";
export default {
  name: "Order",
  props: ["order"],
  components: {
    PaidOrder,
    UnpaidOrder,
    OrderItem,
  },
};
</script>

<style lang="scss" scoped></style>
