<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      menu: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Products',
          href: '#'
        },
        {
          text: 'Chi Siamo',
          href: '#'
        },
        {
          text: 'Contatti',
          href: '#'
        }
      ]
    }
  }
}
</script>
<template>
  <header id="site-header">
    <div class="logo">
      <img src="../assets/img/la-molisana-logo.png" alt="">
    </div>
    <nav class="navbar">
      <a :href="item.href" v-for="item in menu" :class="item.text === 'Products' ? 'active' : ''">
        {{ item.text }}
      </a>
    </nav>
    <!-- /.navbar -->
  </header>
</template>

<style lang="scss" scoped>

</style>