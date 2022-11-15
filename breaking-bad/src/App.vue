<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import axios from 'axios'
import { store as state } from './store.js'
export default {
  name: 'App',
  components: {
    AppHeader, AppMain, AppFooter
  },
  data() {
    return {
      state
    }
  },
  methods: {
    callApi(url) {
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
        })

    }
  },
  mounted() {
    this.callApi(this.state.API_url)
  }
}
</script>

<template>
  <AppHeader />
  <!-- /#site_header -->
  <AppMain />
  <!-- /#site_main -->
  <AppFooter />
  <!-- /#site_footer -->

</template>

<style lang="scss" scoped>

</style>
