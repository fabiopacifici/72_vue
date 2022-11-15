<script>
export default {
  name: 'ActorCard',
  props: {
    actor: Object
  }
}
</script>

<template>
  <div class="col">
    <div class="actor card rounded-0 bg-dark text-white h-100 p-2">
      <img :src="actor.img" :alt="actor.name" class="card-img-top">
      <div class="card-body text-center">
        <h6>{{ actor.name }}</h6>
        <div class="category">{{ actor.category }}</div>
        <div class="status">{{ actor.status }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>