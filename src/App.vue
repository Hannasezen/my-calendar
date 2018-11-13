<template>
  <div id="app" class="flex-row">
    <div class="title flex-row">
      <img src="./assets/logo.png" alt="Logo" class="logo">
      <h1>{{ msg }}</h1>
    </div>
    <div class="mounth">
      <h3>Mart 2018</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  #app .title .logo {
    width: 50px;
    margin: 10px;
  }
</style>
