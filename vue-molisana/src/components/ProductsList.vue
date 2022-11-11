<script>
import Product from './Product.vue';
import products from '../data/products.js';

export default {
  components: {
    Product
  },
  data() {
    return {
      products: products
    }
  }
}

</script>

<template>
  <section class="container">
    <h2>Lista Prodotti</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">

      <Product v-for="product in products" :image="product.src" :title="product.titolo" />

    </div>
  </section>
</template>

<style lang="scss">

</style>