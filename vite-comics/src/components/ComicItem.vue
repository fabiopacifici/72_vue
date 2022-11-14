<script>
export default {
  name: 'ComicItem',
  props: {
    thumb: String,
    series: String
  }
}
</script>

<template>
  <div class="col">
    <div class="comic">
      <img :src="thumb" :alt="series" />
      <h3>{{ series }}</h3>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.comic {

  img {
    max-width: 100%;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>

