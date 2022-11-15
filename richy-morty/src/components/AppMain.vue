<script>
import CharactersList from './CharactersList.vue';
import SearchBox from './SearchBox.vue';

import { store as state } from '../store.js'
import axios from 'axios'
export default {
  name: "AppMain",
  components: { CharactersList, SearchBox },
  data() {
    return {
      state
    }
  },
  methods: {
    searchCharacters() {

      console.log('Searching...');
      console.log(this.state.searchText);

      const searchText = this.state.searchText
      const url = `${this.state.API_URL}?name=${searchText}`
      console.log(url);

      axios.get(url)
        .then(resp => {
          console.log(resp)
          this.state.characters = resp.data.results
          this.state.info = resp.data.info
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<template>

  <main>
    <div class="container">
      <SearchBox @searchData="searchCharacters" />
    </div>

    <CharactersList />
  </main>

</template>

<style>

</style>
