<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'


export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }

}
</script>

<template>

  <site-header></site-header>
  <!-- /#site-header -->
  <site-main></site-main>
  <!-- /#site-main -->
  <site-footer></site-footer>
  <!-- /#site-footer -->


</template>

<style lang="scss">

</style>