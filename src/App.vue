<script >
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/Navigation.vue'
import FooterBar from './components/Footer.vue'
import axios from './axios-auth.js';

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterBar
  },mounted() {
  this.autoLogin();
},
methods: {
  autoLogin() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      axios.defaults.headers.common["Authorization"] =  token;
      this.token = token;
      this.username = username;
    }
  }
}
}
;

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
