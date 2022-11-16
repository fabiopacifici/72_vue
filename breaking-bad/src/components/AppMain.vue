<script>
import ActorsList from './ActorsList.vue';
import FilterCategory from './FilterCategory.vue';
import axios from 'axios'
import { store as state } from '../store.js'

export default {
  name: 'AppMain',
  components: {
    ActorsList,
    FilterCategory

  },
  data() {
    return {
      state
    }
  },
  methods: {
    callApi(url) {
      console.log(this.state.selectCategory, 'riga 21');
      if (this.state.selectCategory !== '') {
        //?category=Better+Call+Saul
        url += `?${this.state.categoryParameter}=${this.state.selectCategory}`
      }
      console.log(url);

      axios
        .get(url)
        .then(response => {
          //console.log(response.data);
          this.state.actors = response.data
          this.state.loading = false
        })
        .catch(err => {
          console.error(err.message);
          this.state.errorMessage = err.message
          this.state.loading = false
        })

    }
  },
  mounted() {
    this.callApi(this.state.API_url)
  }
}

</script>

<template>
  <main id="site_main">
    <FilterCategory @filterByCategory="callApi(state.API_url)" />
    <ActorsList />
  </main>
</template>

<style lang="scss" scoped>

</style>
