<template>
    <div class="mt-10 sm:mt-0">
        <form ref="form">
            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first_name" class="block text-sm font-medium text-gray-700">First
                                name</label>
                            <input type="text" name="first_name" id="first_name" autocomplete="given-name"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="user.firstName">
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                            <input type="text" name="last_name" id="last_name" autocomplete="family-name"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="user.lastName">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="Email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="text" name="Email" id="Email" autocomplete="given-name"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="user.email">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="phone_number" class="block text-sm font-medium text-gray-700">phone number</label>
                            <input type="text" name="phone_number" id="phone_number" autocomplete="family-number"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="user.phone">
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="day_limit" class="block text-sm font-medium text-gray-700">Day limit</label>
                            <input type="text" name="day_limit" id="day_limit"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="user.dayLimit">
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="transaction_Limit" class="block text-sm font-medium text-gray-700">Transaction
                                Limit</label>
                            <input type="text" name="transaction_Limit" id="transaction_Limit"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="user.transactionLimit">
                        </div>

                    </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="button" @click="updateUser"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
import axios from '../../axios-auth';

export default {
    name: "EditUser",
    props: {
        id: String,
    },
    data() {
        return {
            user: {
                id :"",
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
                dayLimit: 0.0,
                transactionLimit : 0.0
            }
        };
    },
    methods: {
        updateUser() {
            axios
                .put("/users/" + this.user.id, this.user)
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
            .get("users/" + this.id)
            .then((result) => {
                console.log(result);
                this.user = result.data;
            })
            .catch((error) => console.log(error));

    },
};
</script>
  
<style></style>