<template>
  <div class="min-h-screen flex flex-col">
  <Header @local-storage-updated="updateUser" :user="user" />
  <NavLinks :user="user" />
  <router-view @local-storage-updated="updateUser"></router-view>
  <footer
  class="mt-auto bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
  <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © {{ (new Date()).getFullYear() }} Copyright:
    <router-link
      class="text-neutral-800 dark:text-neutral-400"
      to="/"
      >Weather Application</router-link
    >
  </div>
</footer>
</div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import NavLinks from './components/NavLinks.vue'
import { isAuthenticated } from './helpers/isAuthenticated';
  const user = ref(isAuthenticated())
  function updateUser() {
    user.value = isAuthenticated()
    console.log('User updating')
  }
</script>

<style>

</style>
