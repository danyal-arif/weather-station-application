<template>
    <nav class="flex justify-evenly items-center gap-4 bg-blue-900 p-6 mb-8 tracking-widest text-3xl">
        <div class="flex justify-center items-center gap-4 bg-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-10 h-10">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
            <span class="block text-white">WEATHER APPLICATION</span>
        </div>
        <div v-if="user">
            <button class="bg-white px-4 py-2 rounded-md" @click="logoutUser">Logout</button>
        </div>
    </nav>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import {  defineEmits, defineProps } from 'vue';
    defineProps({
        user: {}
    })
    const router = useRouter()
    const emit = defineEmits(['localStorageUpdated'])
    function logoutUser() {
        localStorage.clear()
        router.push('/signin')
        emit('localStorageUpdated')
    }
</script>