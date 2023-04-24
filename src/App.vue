<script >
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<template>
  <header>
    <div class="">
    <Navigation></Navigation>
    </div>
  </header>

  <RouterView />
</template>

<style >

</style>
