<template>
  <div class="flex justify-center w-full">
    <div class="w-full p-16">
      <span class="block text-center text-4xl mb-2 text-blue-900"
      >Weather Data</span>
      <label class="inline-flex items-center cursor-pointer mb-4">
        <input type="checkbox" v-model="isRealTime" class="sr-only peer">
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Realtime</span>
      </label>
      <div>
        <Dashboard v-if="!isRealTime" />
        <!-- <DashboardRealtime v-else /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Dashboard from '@/components/Dashboard.vue';
// import DashboardRealtime from '@/components/DashboardRealtime.vue'
import { ref } from 'vue';

  const isRealTime = ref(false)

</script>
