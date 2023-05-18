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
      </div>
      <div>
        <router-link to="/login" class="inline-block text-l px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0"
          active-class="active">Log in</router-link>
      </div>
    </div>
  </nav>
</template>
  
<script >
export default {
  name: "NavigationBar",
};
</script>
  
<style></style>