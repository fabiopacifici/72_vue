<script>
import CharacterItem from './CharacterItem.vue';
import { store } from '../store.js'

export default {
  name: 'CharactersList',
  components: {
    CharacterItem
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <section class="characters">
    <div class="container">
      <h2>Characters</h2>
      <div class="row row-cols-1 row-cols-sm-4">
        <CharacterItem :character="character" v-for="character in store.characters" />
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

  </section>
</template>