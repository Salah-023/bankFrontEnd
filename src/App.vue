<script >
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/Navigation.vue'
import FooterBar from './components/Footer.vue'
import { defineStore } from 'pinia';
import { userStore } from './stores/user.js';

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterBar
  }, data() {
    return {
      store: userStore()
    };
  }, mounted() {
    this.autologin();
  },
  methods: {
    autologin() {
      this.store.autologin();
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
<style ></style>
