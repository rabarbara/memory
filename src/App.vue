<template>
  <div id="app">
    <h1>Spomin</h1>
    <p>Izberi velikost igrišča</p>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
h1 {
    font-size: 2rem;
    margin-bottom:2rem;

  }
</style>
