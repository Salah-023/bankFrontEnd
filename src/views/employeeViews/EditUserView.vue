<template>
    <div class="flex justify-center items-center h-screen">
        <div class="mt-10 sm:mt-0">
            <form ref="form">
                <div class="overflow-hidden sm:rounded-md">
                    <div class="px-4 py-4 sm:p-6">
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
            store: userStore()

        };
    },
    methods: {
        updateUser() {

            axios
                .put("/users/" + this.user.id, this.user, {
                    headers: {
                        Authorization: `Bearer ${this.store.getToken}`
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    this.$refs.form.reset();
                    this.$router.push("/users");
                })
                .catch((error) => console.log(error));
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