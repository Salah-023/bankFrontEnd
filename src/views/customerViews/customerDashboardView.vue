<template>
    <main>
        <div class="h-screen container mx-auto py-8">
            <div class="flex items-center justify-between">
                <p class="text-4xl font-bold mx-5" style="margin-top: 7rem;">Welcome to Inholland Bank, {{ user.firstName }}
                    {{ user.lastName }}</p>
                <button class="bg-white hover:bg-teal-500 text-teal-700 text-teal font-bold py-2 px-4 rounded"
                    style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    Edit Profile
                </button>
            </div>
            <div class="grid grid-cols-3 gap-4 my-5">
                <div class="col-span-2">
                    <div class="rounded-lg bg-teal-200 p-4 "
                        style="background-color: #b9eae4; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        <p class="text-2xl font-bold" style="color: #333;">My Accounts:</p>

                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <div class="rounded-lg bg-white p-4">
                                <p class="text-lg text-center font-bold mb-2">Current Account</p>
                                <p class="text-lg">IBAN: {{ currentAccount.iban }}</p>
                                <p class="text-lg">Balance: {{ currentAccount.balance }}</p>
                                <p class="text-lg">Limit: {{ currentAccount.absoluteLimit }}</p>
                            </div>
                            <div class="rounded-lg bg-white p-4">
                                <p class="text-lg text-center font-bold">Savings Account</p>
                                <p class="text-lg">IBAN: {{ savingsAccount.iban }}</p>
                                <p class="text-lg">Balance: {{ savingsAccount.balance }}</p>
                                <p class="text-lg">Limit: {{ savingsAccount.absoluteLimit }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1">
                    <button
                        class="w-full h-50 block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mb-2"
                        style="background-color: #109385;">
                        <img src="/transfer-icon.png" alt="Image" class="inline-block h-10 w-10 mr-5">
                        MAKE A TRANSACTION
                    </button>

                    <button
                        class="w-full h-50 block bg-white hover:bg-teal-500 text-teal-500 font-bold py-2 px-4 rounded mb-2"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"> <img src="/search-icon.png" alt="Image"
                            class="inline-block h-9 w-7 mr-5">
                        SEARCH FOR AN IBAN
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from '../../axios-auth';

export default {
    data() {
        return {
            user: {
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
                dayLimit: 0.0,
                transactionLimit: 0.0
            },
            bankAccounts: [],
            currentAccount: {
                iban: "",
                balance: "",
                absoluteLimit: 0.0
            },
            savingsAccount: {
                iban: "",
                balance: "",
                absoluteLimit: 0.0
            }
        };
    },
    mounted() {
        const token = localStorage.getItem('token');
        axios
            .get("users/email/" + localStorage.getItem('username'), {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((result) => {
                console.log(result);
                this.user = result.data;
                this.bankAccounts = result.data.bankAccounts;
                this.currentAccount = this.getCurrentAccount(this.bankAccounts);
                this.savingsAccount = this.getSavingsAccount(this.bankAccounts);
            })
            .catch((error) => console.log(error));
    },
    methods: {
        getCurrentAccount(bankAccounts) {
            return bankAccounts.find(account => account.type === 'CURRENT') || null;
        },
        getSavingsAccount(bankAccounts) {
            return bankAccounts.find(account => account.type === 'SAVINGS') || null;
        }
    }
};
</script>