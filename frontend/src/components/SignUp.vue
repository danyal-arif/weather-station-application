<template>
    <div class="h-full flex justify-center items-center">
        <form @submit.prevent="onSubmit" class="border rounded-md shadow-xl p-4 w-1/2">
        <span class="block text-4xl text-center mb-4 text-blue-900">Register</span>
        <div class="grid gap-6 mb-6 w-full">
            <!-- <TextField :id="`first_name`" :label="`First Name`" :placeholder="`Enter your first name`" :vModel="firstName" /> -->
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" v-model="state.firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe">
                <span v-if="v$.firstName.$error" class="inline-block text-red-600 mt-1"> {{ v$.firstName.$errors[0].$message }} </span>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                <input type="text" id="last_name" v-model="state.lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe">
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" v-model="state.email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com">
            </div> 
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" v-model="state.password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••"> 
            </div> 
            <div>
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" id="confirm_password" v-model="state.confirmPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••">
            </div> 
        </div>
        <div class="flex justify-center">
            <button type="submit" class="text-white bg-blue-900 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        </form>
    </div>
</template>

<script setup>
import {  reactive, computed } from 'vue';
import useValidate from '@vuelidate/core'
import { required, minLength, sameAs, maxLength } from '@vuelidate/validators'
    const state = reactive({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const rules = computed(() => ({
            firstName: {required, minLength: minLength(4), maxLength: maxLength(20)},
            lastName: {required, minLength: minLength(4), maxLength: maxLength(20)},
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAs: sameAs(state.password) },
    }))
    const v$ = useValidate(rules, state)
    console.log(v$.value)
    function onSubmit() {
        console.log('submitting')
        if (v$.value.$invalid) {
            console.log('invalid')
            v$.value.$touch()
            return
        }
    }


</script>