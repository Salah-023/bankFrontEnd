<script >
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/Navigation.vue'
import FooterBar from './components/Footer.vue'
export default {
  name: "App",
  components: {
    NavigationBar,
    FooterBar
  }
};
</script>

<template>
  <header>
    <div class="">
    <NavigationBar></NavigationBar>
    </div>
  </header>

  <RouterView />
  <FooterBar></FooterBar>
</template>
<style >

</style>
