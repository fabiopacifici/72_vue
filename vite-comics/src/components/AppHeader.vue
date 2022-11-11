<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menu: [
        {
          text: 'Characters',
          href: '#'
        },
        {
          text: 'Comics',
          href: '#'
        },
        {
          text: 'Movies',
          href: '#'
        },
        {
          text: 'TV',
          href: '#'
        },
        {
          text: 'Games',
          href: '#'
        },
        {
          text: 'Collectibles',
          href: '#'
        },
        {
          text: 'Video',
          href: '#'
        },
        {
          text: 'Fans',
          href: '#'
        },
        {
          text: 'News',
          href: '#'
        },
        {
          text: 'Shop',
          href: '#'
        }
      ]
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="logo">
          <img src="../assets/img/dc-logo.png" alt="">
        </div>
        <ul class="main-menu">
          <li v-for="item in menu">
            <a :href="item.href">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


header {
  background-color: white;
  padding: 1rem 0;

  .logo {
    img {
      height: 70px;
    }
  }

  ul {
    list-style: none;
    display: flex;

    li {
      a {
        font-weight: 600;
        padding: 2rem 1rem;
        text-transform: uppercase;
        text-decoration: none;
        color: $dc-dark;

        &:hover {
          color: $dc-primary;
          border-bottom: 4px solid $dc-primary;
        }

      }
    }
  }

}
</style>