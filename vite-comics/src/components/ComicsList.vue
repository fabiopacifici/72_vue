<script>
import ComicItem from './ComicItem.vue'
import comics from '../data/comics.js'

export default {
  name: 'ComicsList',
  components: {
    ComicItem
  },
  data() {
    return {
      comics
    }
  }
}
</script>

<template>
  <section class="comics">
    <div class="container">
      <h2>Current Series</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
        <ComicItem v-for="comic in comics" :thumb="comic.thumb" :series="comic.series" />
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.comics {
  h2 {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: $dc-primary;
    margin-top: -2rem;
    margin-bottom: 3rem;
  }
}
</style>