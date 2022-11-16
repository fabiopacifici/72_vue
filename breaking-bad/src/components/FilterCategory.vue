<script>
import { store as state } from '../store.js'
export default {
  name: 'FilterCategory',
  data() {
    return {
      state
    }
  }
}
</script>

<template>
  <div class="filter container">
    <!-- Connettere il select all'istanza tramite v-model -->
    <!-- Ascolare per il cambio di selezione -->
    <select v-model="state.selectCategory" @change="$emit('filterByCategory')">
      <option value="">All</option>
      <option value="Breaking Bad">Breaking Bad</option>
      <option value="Better Call Saul">Better Call Saul</option>
    </select>
  </div>
</template>


<style lang="scss" scoped>

</style>