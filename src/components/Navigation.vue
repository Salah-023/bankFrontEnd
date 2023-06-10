<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">

    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-l lg:flex-grow">
        <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          active-class="active">Home</router-link>

        <router-link :to="{ path: isLoggedIn ? '/customerDashboard' : '#' }"
        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        :class="{ 'text-gray-400 cursor-not-allowed': !isLoggedIn }"
        active-class="active" :disabled="!isLoggedIn" v-tooltip="{ content: 'Must be logged in' }">Your dashboard</router-link>

        <router-link :to="{ path: isLoggedIn ? '/makeTransaction' : '#' }"
          class="mr-4 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          :class="{ 'text-gray-400 cursor-not-allowed': !isLoggedIn }"
          active-class="active" :disabled="!isLoggedIn" v-tooltip="{ content: 'Must be logged in' }">Make transaction</router-link>

        <router-link v-if="this.store.getRoles.includes('ROLE_EMPLOYEE')" to="/bankAccountList"
        class="mr-4 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        active-class="active">Bank account list</router-link>

        <router-link v-if="this.store.getRoles.includes('ROLE_EMPLOYEE')" to="/users"
          class="mr-4 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          active-class="active">User list </router-link>

        <router-link v-if="this.store.getRoles.includes('ROLE_EMPLOYEE')" to="/employeeDashboard"
          class="mr-4 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          active-class="active">Employee dashboard  </router-link>

        <router-link v-if="this.store.getRoles.includes('ROLE_EMPLOYEE')" to="/employeeMakeTransaction"
          class="mr-4 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          active-class="active">Employee transaction</router-link>
      </div>
      <div>
        <button v-if="isLoggedIn" type="button" @click="logout"
          class="inline-block text-l px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0"
          active-class="active">Logout
        </button>
        <router-link v-else to="/login"
          class="inline-block text-l px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0"
          active-class="active">Log in
        </router-link>
      </div>
    </div>
  </nav>
</template>
  
<script >
import { userStore } from '../stores/user.js';
export default {
  name: "NavigationBar",
  data() {
    return {
      store: userStore()
    };
  }, computed: {
    isLoggedIn() {
      return this.store.getToken != '';
    }
  },
  methods: {
    logout() {
      this.store.logout();
      this.$router.push('/');
    }
  }
};
</script>
  
<style></style>