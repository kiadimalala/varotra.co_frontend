<template>
  <div class="grid grid-cols-4 gap-4 place-content-center">
    <ProductCard v-for="(product) in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import {mapState} from 'vuex'
    export default {
        name:"Products",
        computed:{
            ...mapState(['products'])
        },
        components:{
            ProductCard
        },
        created () {
            this.$store.dispatch('getProducts')
        },
    }
</script>

<style lang="scss" scoped></style>
