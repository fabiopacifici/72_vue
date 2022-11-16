<script>
import ActorCard from './ActorCard.vue';
import { store as state } from '../store.js';

export default {
  name: 'ActorsList',
  components: {
    ActorCard
  },
  data() {
    return {
      state
    }
  }
}
</script>

<template>

  <div class="actors" v-if="!state.loading">

    <div class="container p-5 bg-white">

      <div class="alert dark" role="alert">
        <!-- TODO: make a coputed prop -->
        <strong>Found {{ state.actors.length }}</strong> Characters
      </div>


      <div class="row row-cols-1 row-cols-md-5 g-4">

        <ActorCard v-for="actor in state.actors" :actor="actor" />

      </div>
    </div>


  </div>
  <div class="loader d-flex justify-content-center align-items-center p-5" v-else>
    Loading...
  </div>

</template>


<style lang="scss" scoped>

</style>