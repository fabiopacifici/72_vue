<script>
import { store as state } from '../store.js';
export default {
  name: 'AppFooter',
  data() {
    return {
      state
    }
  },
  /*  methods: {
      totalResults() {
        return this.state.characters.length
      }
    }, */
  computed: {
    totalResults() {
      return this.state.characters.length
    }
  }
}
</script>

<template>
  <footer class="text-center py-4">
    <p v-if="state.characters !== null">Results: {{ totalResults }}</p>
  </footer>
</template>

<style>

</style>
