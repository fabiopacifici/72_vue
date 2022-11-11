<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer>
    <div class="top">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <h3>Dc Comics</h3>
            <ul>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
            </ul>
            <h3>Shop</h3>
            <ul>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
            </ul>
          </div>
          <div class="col-2">
            <h3>DC</h3>
            <ul>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
            </ul>
          </div>
          <div class="col-2">
            <h3>Sites</h3>
            <ul>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div class="bottom">
      <div class="container d-flex justify-content-between">
        <div class="call_to_action">
          <a href="#" class="btn btn-primary">
            Sign-up now!
          </a>
        </div>
        <div class="social">
          <h3>Follow us</h3>
          <img src="../assets/img/footer-facebook.png" alt="">
          <img src="../assets/img/footer-twitter.png" alt="">
          <img src="../assets/img/footer-youtube.png" alt="">
          <img src="../assets/img/footer-pinterest.png" alt="">
          <img src="../assets/img/footer-periscope.png" alt="">
        </div>
      </div>

    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
  .top {
    background-image: url('../assets/img/footer-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .container {
      background-image: url('../assets/img/dc-logo-bg.png');
      background-position: right center;
      background-repeat: no-repeat;
    }

    h3 {
      text-transform: uppercase;
      margin: 1rem 0;
    }

    ul {
      list-style: none;
      margin-bottom: 1rem;

      li {
        a {
          text-decoration: none;
          color: $dc-light-dark;
        }
      }
    }
  }

  .bottom {
    background-color: $dc-dark;
    padding: 1rem;

    .btn.btn-primary {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border: 1px solid $dc-primary;
      text-transform: uppercase;
      color: $dc-light;
      text-decoration: none;

      &:hover {
        background-color: $dc-primary;
      }
    }

    .social {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      h3 {
        color: $dc-primary;
        text-transform: uppercase;
      }
    }
  }
}
</style>