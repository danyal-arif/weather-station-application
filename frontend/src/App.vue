<template>
  <div class="min-h-screen flex flex-col">
  <Header />
  <NavLinks />
  <router-view></router-view>
  <footer
  class="mt-auto bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
  <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2024 Copyright:
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
import Header from './components/Header.vue';
import NavLinks from './components/NavLinks.vue'
</script>

<style>

</style>
