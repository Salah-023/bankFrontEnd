<template>
    <div class="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="flex flex-col items-center">
            <div v-if="hasErrors" class="my-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
                <strong class="font-bold"> Error: </strong>
                <span class="block sm:inline" style="z-index: 1;">{{ errorText }}</span>
                <span class="absolute top-0 right-0 mt-1 mr-1">
                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" @click="hasErrors = false">
                        <title>Close</title>
                        <path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>
            </div>
            <p class="mb-4 text-lg font-medium text-center">Don't know the IBAN of the person you want to do a transaction
                to?<br>Enter their name and find their IBAN.</p>
            <div class="my-6">
                <label for="firstName" class="pl-3 block text-sm font-medium leading-6 text-gray-900">First Name</label>
                <input id="firstName" name="firstName" type="text" placeholder="First Name" v-model="firstName"
                    class="w-80 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-14b8a6">
            </div>

            <div class="mb-6">
                <label for="lastName" class="pl-3 block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Last Name" v-model="lastName"
                    class="pl-3 w-80 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-14b8a6">
            </div>

            <button @click="searchForIban"
                class="mb-5 flex items-center justify-center w-48 h-12 bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:bg-12b8a6">
                Find IBAN
            </button>

            <div class="mb-6">
                <label for="iban" class="pl-3 block text-sm font-medium leading-6 text-gray-900">Iban</label>
                <input type="text" v-model="iban"
                    class="pl-3 w-80 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-14b8a6 bg-transparent font-bold"
                    readonly>
            </div>

        </div>
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
            lastName: '',
            errorText: '',
            hasErrors: false
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
                .catch((error) => {
                    console.log(error);
                    console.log(this.user);
                    this.iban = '';
                    this.errorText = "User couldn't find. Please try again.";
                    this.hasErrors = true;
                });
        }
    }
}
</script>

<style ></style>