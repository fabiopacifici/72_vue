<script>
import HeroImage from './HeroImage.vue'
import ComicsList from './ComicsList.vue';
import Banner from './Banner.vue'

export default {
  name: 'AppMain',
  components: {
    HeroImage,
    ComicsList,
    Banner,
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <main>
    <HeroImage />
    <ComicsList />
    <Banner />

  </main>
</template>

<style lang="scss" scoped>

</style>