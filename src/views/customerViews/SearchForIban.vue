<template>
    <div class="flex flex-col items-center">
        <div class="my-6">
            <input type="text" placeholder="First name of the user" v-model="firstName"
                class="w-80 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
        </div>

        <div class="mb-6">
            <input type="text" placeholder="Last name of the user" v-model="lastName"
                class="w-80 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
        </div>

        <div class="mb-6">
            <div class="font-bold text-xl">Here is the IBAN:</div>
            <input type="text" v-model="iban"
                class="w-80 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                readonly>
        </div>

        <button @click="searchForIban"
            class="flex items-center justify-center w-48 h-12 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M15.701 14.299l-4.181-4.181a6 6 0 111.414-1.414l4.181 4.181a1 1 0 01-1.414 1.414zM8 14A6 6 0 108 2a6 6 0 000 12z">
                </path>
            </svg>
            Search
        </button>
    </div>
</template>
  
  

<script>
import axios from '../../axios-auth';
export default {
    name: 'SearchForIban',
    data() {
        return {
            iban: '',
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        searchForIban() {
            const token = localStorage.getItem('token');
            axios
                .post("bankAccounts/search", {
                    firstName: this.firstName,
                    lastName: this.lastName
                }, {
                    headers: {
                        Authorization: `Bearer ${token}}`
                    }
                })
                .then((result) => {
                    console.log(result);
                    this.iban = result.data[0].iban;
                })
                .catch((error) => console.log(error));
        }
    }
}
</script>

<style ></style>