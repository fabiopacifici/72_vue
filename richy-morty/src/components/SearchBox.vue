<script>
import { store as state } from '../store.js';

export default {
  name: 'SearchBox',
  emits: ['searchData'],
  data() {
    return {
      state
    }
  }
}
</script>

<template>
  <div class="search d-flex gap-2 my-5">
    <!-- con il keyup facciamo tante chiamate ajax quante lettere digitiamo nel serach -->

    <!-- <input type="search" class="form-control" v-model="state.searchText"
      placeholder="Search by name"> -->
    <input type="search" class="form-control" v-model="state.searchText" placeholder="Search by name"
      @keyup.enter="$emit('searchData')">

    <!--  <select v-model="categorySelector" @change="">
      <option value="">Select a category</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select> -->

    <button type="submit" class="btn btn-primary" @click="$emit('searchData')">Search</button>
  </div>
</template>


