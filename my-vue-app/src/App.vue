<script>
import Navigation from './components/Navigation.vue'
import List from './components/List.vue'
export default {
  components: {
    Navigation,
    List
  }
}
</script>

<template>
  <header>
    <div class="logo">
      <img src="./assets/vue.svg" alt="">
      <img src="/vite.svg" alt="">

    </div>

    <navigation></navigation>
  </header>
<main>
  <h1 class="title">Hello Vite+vue</h1>

  <section>
    <h2>Lista 1</h2>
    <list></list>
  </section>
  
  <section>
    <h2>Lista 2</h2>
    <list></list>
  </section> 

</main>
 
</template>

<style>
</style>