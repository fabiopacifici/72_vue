<script>
export default {
  name: 'Product',
  props: {
    image: String,
    title: String
  },

}
</script>

<template>
  <div class="col">
    <div class="product">
      <img :src="image" :alt="title">
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.product {
  background-color: $light;
  text-align: center;

  h4 {
    padding: 1rem 0;
  }
}
</style>
