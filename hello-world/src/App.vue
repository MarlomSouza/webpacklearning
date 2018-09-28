<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
import Header from "./components/Header";

<script>
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="sass">
  @import '../node_modules/digix-ui/ativos/sass/temas/papel-zero'
</style>
