<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader, AppMain, AppFooter
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
