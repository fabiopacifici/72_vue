<script>

export default {
  name: 'Jumbotron'
}
</script>

<template>

  <div class="jumbotron">

    <h1 class="title">
      Custom jumbotron
    </h1>
    <p class="lead">
      Using a series of utilities, you can create this jumbotron, just like the one in previous
      versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
    </p>
    <button class="btn" type="button">Example button</button>
  </div>
</template>

<style scoped>
.jumbotron
{
  background-color: rgb(11, 11, 11);
  color: white;
  padding: 1rem;
}

.title
{
  text-transform: uppercase;
  margin: 1rem 0;
}

.lead
{
  font-size: 1.1rem;
  line-height: 1.5rem;
}

.btn
{
  display: inline-block;
  background-color: cornflowerblue;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin: 1rem 0;
}
</style>
