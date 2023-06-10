<template>
    <div class="h-screen flex justify-center items-center">
        <div class="max-w-md">
            <div class="mb-5" id="transaction-header">
                <h1 class="mt-5 mb-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">Make a
                    Transaction
                    For a Customer
                </h1>
            </div>
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
                <div v-if="hasSuccess"
                    class="my-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert">
                    <strong class="font-bold"> Success: </strong>
                    <span class="block sm:inline" style="z-index: 1;">{{ successText }}</span>
                    <span class="absolute top-0 right-0 mt-1 mr-1">
                        <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" @click="hasSuccess = false">
                            <title>Close</title>
                            <path
                                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </span>
                </div>
            <h1 class="mt-5 mb-5 text-center text-2xl font-bold leading-9 tracking-tight">Transaction Between Customer
                Accounts</h1>

            <form class="text-center">
                <div class="mb-4">
                    <label for="fromAccount" class="block mb-2 text-sm font-bold text-black">From account IBAN:</label>
                    <input id="fromAccount" type="text" class="w-64 px-3 py-2 border border-teal-500 rounded"
                        v-model="transaction.accountFrom.iban"
                        placeholder="Enter From Account IBAN">
                </div>
                <div class="mb-4">
                    <label for="toAccount" class="block mb-2 text-sm font-bold text-black">To account IBAN:</label>
                    <input id="toAccount" type="text" class="w-64 px-3 py-2 border border-teal-500 rounded"
                        v-model="transaction.accountTo.iban"
                        placeholder="Enter To Account IBAN">
                </div>
                <div class="mb-4">
                    <label for="amount" class="block mb-2 text-sm font-bold text-black">Amount:</label>
                    <input id="amount" type="text" class="w-64 px-3 py-2 border border-teal-500 rounded w-24"
                        v-model="transaction.amount"
                        placeholder="100.00 €">
                </div>
                <router-link to="/employeeDashboard"
                    class="mx-2 mt-4 rounded-md bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4">
                    Cancel
                </router-link>

                <button type="button" @click="makeTransaction()"
                    class="mx-2 mt-4 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4">
                    Confirm
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from '../../axios-auth';
import { userStore } from '../../stores/user.js';
export default {
    name: "EmployeeMakeTransaction",
    data() {
        return {
            transaction: {
                accountFrom: {
                    iban: ""
                },
                accountTo: {
                    iban: ""
                },
                amount: ""
            },
            errorText: "aa",
            successText: "aa",
            hasErrors: false,
            hasSuccess: false,
            store: userStore()
        };
    },
    methods: {
        makeTransaction() {
            axios
                .post("/transactions", this.transaction, {
                    headers: {
                    Authorization: `Bearer ${this.store.getToken}`
                }
                })
                .then((res) => {
                    console.log(res.data);
                    this.successText = "Money transaction has been sent successfully.";
                    this.hasSuccess = true;
                    this.errorText = '';
                    this.hasErrors = false;
                    this.$refs.form.reset();
                })
                .catch((error) => {
                    console.log(error);
                    this.errorText = "There was a problem while performing the transaction. Please try again.";
                    this.hasErrors = true;
                    this.successText = "";
                    this.hasSuccess = false;
                });
        }
    }
};
</script>

