<script>
export default {
  name: 'CharacterItem',
  props: {
    character: Object
  }
}
</script>
<template>
  <div class="col">
    <div class="character text-center">
      <img :src="character.image" :alt="character.name" class="rounded-circle">
      <h3>{{ character.name }}</h3>
      <div class="status">{{ character.status }}</div>
      <div class="specie">{{ character.species }}</div>
    </div>
    <!-- /.character -->
  </div>
  <!-- /.col -->

</template>


<style>

</style>