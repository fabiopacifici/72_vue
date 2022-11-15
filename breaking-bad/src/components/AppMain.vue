<script>
import ActorsList from './ActorsList.vue';

export default {
  name: 'AppMain',
  components: {
    ActorsList,

  }
}

</script>

<template>
  <main id="site_main">

    <div class="filter container">
      <select class="">
        <option value="">Select category</option>
      </select>
    </div>

    <ActorsList />

  </main>
</template>

<style lang="scss" scoped>

</style>
