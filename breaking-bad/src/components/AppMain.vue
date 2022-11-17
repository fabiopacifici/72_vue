<script>
import ActorsList from './ActorsList.vue';
import FilterCategory from './FilterCategory.vue';
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
  mounted() {
    this.state.callApi(this.state.API_url)
  }
}

</script>

<template>
  <main id="site_main">
    <FilterCategory @filterByCategory="state.callApi(state.API_url)" />
    <ActorsList />
  </main>
</template>

<style lang="scss" scoped>

</style>
