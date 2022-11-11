<script>
export default {
  name: 'Banner',
  data() {
    return {
      items: [
        {
          icon: 'buy-comics-digital-comics.png',
          text: 'Digital Comics'
        },
        {
          icon: 'buy-comics-merchandise.png',
          text: 'DC Merchandise'
        },
        {
          icon: 'buy-comics-shop-locator.png',
          text: 'Subscriptions'
        },
        {
          icon: 'buy-comics-subscriptions.png',
          text: 'Comic Shop Locator'
        },
        {
          icon: 'buy-dc-power-visa.svg',
          text: 'Dc poer visa'
        }
      ]
    }
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <div class="banner">
    <div class="container d-flex justify-content-evenly">
      <div class="item" v-for="item in items">
        <img :src="getImageUrl(item.icon)" alt="">
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.banner {
  background-color: $dc-primary;
  padding: 1rem 0;

  .item {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    img {
      height: 80px;
    }
  }
}
</style>