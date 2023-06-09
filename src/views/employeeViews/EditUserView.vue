<template>
    <div class="flex justify-center items-center h-screen">
        <div class="mt-10 sm:mt-0">
            <form ref="form">
                <div class="overflow-hidden sm:max-w-sm">
                    <div class="px-4 py-4 sm:p-6">
                        <div v-if="hasErrors"
                            class="my-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                            role="alert">
                            <strong class="font-bold"> Error: </strong>
                            <span class="block sm:inline" style="z-index: 1;">{{ errorText }}</span>
                            <span class="absolute top-0 right-0 mt-1 mr-1">
                                <svg class="fill-current h-6 w-6 text-red-500" role="button"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click="hasErrors = false">
                                    <title>Close</title>
                                    <path
                                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="hasSuccess"
                            class="my-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                            role="alert">
                            <strong class="font-bold"> Success: </strong>
                            <span class="block sm:inline" style="z-index: 1;">{{ successText }}</span>
                            <span class="absolute top-0 right-0 mt-1 mr-1">
                                <svg class="fill-current h-6 w-6 text-green-500" role="button"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click="hasSuccess = false">
                                    <title>Close</title>
                                    <path
                                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                </svg>
                            </span>
                        </div>
                        <div class="col-span-6 sm:col-span-3 mb-4">
                            <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                            <input type="text" name="first_name" id="first_name" autocomplete="given-name"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border-gray-300 rounded-md"
                                v-model="user.firstName">
                        </div>
                        <div class="col-span-6 sm:col-span-3 mb-4">
                            <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                            <input type="text" name="last_name" id="last_name" autocomplete="family-name"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border-gray-300 rounded-md"
                                v-model="user.lastName">
                        </div>
                        <div class="col-span-6 sm:col-span-3 mb-4">
                            <label for="Email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="text" name="Email" id="Email" autocomplete="given-name"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border-gray-300 rounded-md"
                                v-model="user.email">
                        </div>
                        <div class="col-span-6 sm:col-span-3 mb-4">
                            <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" name="phone_number" id="phone_number" autocomplete="family-number"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border-gray-300 rounded-md"
                                v-model="user.phone">
                        </div>
                        <div class="col-span-6 sm:col-span-6 lg:col-span-2 mb-4">
                            <label for="day_limit" class="block text-sm font-medium text-gray-700">Day limit</label>
                            <div class="flex">
                                <input type="text" name="day_limit" id="day_limit"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-1/2 md:w-1/3 lg:w-1/24 px-3 py-2 border-gray-300 rounded-md"
                                    v-model="user.dayLimit">
                                <span class="flex items-center ml-2 text-gray-600">€</span>
                            </div>
                        </div>
                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="transaction_Limit" class="block text-sm font-medium text-gray-700">Transaction
                                Limit</label>
                            <div class="flex">
                                <input type="text" name="transaction_Limit" id="transaction_Limit"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-1/2 md:w-1/3 lg:w-1/24 px-3 py-2 border-gray-300 rounded-md"
                                    v-model="user.transactionLimit">
                                <span class="flex items-center ml-2 text-gray-600">€</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 text-left sm:px-6 mb-5">
                        <button type="button" @click="updateUser"
                            class="inline-flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white"
                            style="background-color: #14b8a6; hover: background-color: #14b8a6; focus: ring-2 ring-offset-2 ring-#14b8a6; margin-bottom: 1rem;">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  
  
<script>
import axios from '../../axios-auth';
import { userStore } from '../../stores/user.js';

export default {
    name: "EditUser",
    props: {
        id: String,
    },
    data() {
        return {
            user: {
                id: "",
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
                dayLimit: 0.0,
                transactionLimit: 0.0
            },
            store: userStore(),
            errorText: '',
            successText: '',
            hasErrors: false,
            hasSuccess: false

        };
    },
    methods: {
        updateUser() {
            if (this.user.firstName.trim() === '' || this.user.lastName.trim() === '' || this.user.email.trim() === '' || this.user.phone.trim() === '' || this.user.dayLimit === '' || this.user.transactionLimit === '') {
                this.errorText = 'Please fill in all the required fields.';
                this.hasErrors = true;
                return;
            }

            if (this.user.dayLimit < 0 || this.user.transactionLimit < 0) {
                this.errorText = "Please, don't enter negative numbers.";
                this.hasErrors = true;
                return;
             } 
             axios
                .put("/users/" + this.user.id, this.user, {
                    headers: {
                        Authorization: `Bearer ${this.store.getToken}`
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    this.successText = "Profile details have been updated successfully. "
                    this.hasSuccess = true;
                    this.errorText = '';
                    this.hasErrors=false;
                    this.$refs.form.reset();
                })
                .catch((error) => {
                    console.log(error);
                    this.errorText = "There was a problem while saving the profile details. Please try again.";
                    this.hasErrors = true;
                    this.successText = "";
                    this.hasSuccess = false;
                });
        },
    },
    mounted() {
        axios
            .get("users/" + this.id, {
                headers: {
                    Authorization: `Bearer ${this.store.getToken}`
                }
            })
            .then((result) => {
                console.log(result);
                this.user = result.data;
            })
            .catch((error) => console.log(error));
    },
};
</script>
  
<style></style>