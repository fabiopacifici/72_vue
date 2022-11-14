<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import { store } from './store.js'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          this.store.characters = response.data.results
          this.store.info = response.data.info

        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
    console.log(this.store)
  }
}
</script>

<template>

  <AppHeader />
  <AppMain />
  <AppFooter />


</template>

<style lang="scss" scoped>

</style>
