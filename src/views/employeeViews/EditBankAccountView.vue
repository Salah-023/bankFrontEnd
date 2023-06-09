<template>
    <div class="flex justify-center items-center h-screen">
        <div class="my-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="text-center text-2xl font-bold mb-4">Edit Bank account</h2>
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
                class="my-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
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
            <form ref="form">
                <div class="justify-center overflow-hidden sm:rounded-md">
                    <div class="px-4 py-4 sm:p-6">
                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="absoluteLimit" class="block text-sm font-medium text-gray-700">Absolute
                                limit</label>
                            <div class="flex">
                                <input type="text" name="absoluteLimit" id="absoluteLimit"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-1/2 md:w-1/3 lg:w-1/24 px-3 py-2 border-gray-300 rounded-md"
                                    v-model="bankAccount.absoluteLimit">
                                <span class="flex items-center ml-2 text-gray-600">€</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 sm:px-6 mb-3">
                        <button type="button" @click="changeAccountStatus"
                            class="bg-transparent hover:bg-blue-500 text-red-600 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            {{ buttonText }}
                        </button>

                    </div>
                    <div class="px-4 sm:px-6 mb-5">
                        <button type="button" @click="updateBankAccount"
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

export default {
    name: "EditBankAccount",
    props: {
        iban: String,
    },
    data() {
        return {
            bankAccount: {
                iban: "",
                absoluteLimit: 0.0,
                available: true
            },
            errorText: '',
            successText: '',
            hasErrors: false,
            hasSuccess: false
        };
    },
    methods: {
        updateBankAccount() {
            const token = localStorage.getItem('token');
            axios
                .put("/bankAccounts/" + this.bankAccount.iban, this.bankAccount, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    this.$refs.form.reset();
                    this.successText = "Bank account details have been updated successfully. "
                    this.hasSuccess = true;
                    this.$refs.form.reset();
                })
                .catch((error) => {
                    console.log(error);
                    this.errorText = "There was a problem while saving the bank account details. Please try again.";
                    this.hasErrors = true;
                });
        },
        changeAccountStatus() {
            this.bankAccount.available = !this.bankAccount.available;
            this.updateBankAccount();
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        axios
            .get("bankAccounts/" + this.iban, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((result) => {
                console.log(result);
                this.bankAccount = result.data;
            })
            .catch((error) => console.log(error));
    },
    computed: {
        buttonText() {
            return this.bankAccount.available ? 'Deactivate this account' : 'Activate this account';
        }
    },
};
</script>
  
<style></style>