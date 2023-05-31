<template>
    <div class="flex justify-center items-center h-screen">
        <div class="mt-10 sm:mt-0">
            <h2 class="text-center text-2xl font-bold mb-4">Edit Bank account</h2>
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
                        <button type="button" @click="changeStatus"
                            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
            }
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
                    this.$router.push("/bankAccountList");
                })
                .catch((error) => console.log(error));
        },
        changeAccountStatus() {
            const token = localStorage.getItem('token');
            this.bankAccount.available = !this.bankAccount.available;
            axios
                .put("/bankAccount/" + this.bankAccount.iban, this.bankAccount, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    this.$refs.form.reset();
                    this.$router.push("/bankAccounts");
                })
                .catch((error) => console.log(error));
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
            return this.available ? 'Activate' : 'Deactivate this account';
        }
    },
};
</script>
  
<style></style>