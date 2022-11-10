<script>
import AppTitle from "./components/AppTitle.vue";
import Jumbotron from "./components/Jumbotron.vue";

export default {
  name: 'App',
  components: {
    AppTitle,
    Jumbotron
  }
}
</script>

<template>

  <jumbotron></jumbotron>

  <app-title></app-title>

</template>
