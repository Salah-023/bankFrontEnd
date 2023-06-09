<template>
    <div class="container mx-auto py-8">
        <div class="mb-5" id="transaction-header">
            <h1 class="mt-5 mb-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">Make a Transaction
            </h1>
        </div>

        <div class="mt-5 grid grid-cols-5 gap-3" id="transaction-options">
            <div class="flex items-center pl-4 border border-teal-700 rounded" style="background-color: white;">
                <input id="savingToCurrent" type="radio" value="1" name="bordered-radio"
                    class="w-4 h-4 text-teal-600 bg-gray-100 border-teal-700 focus:ring-blue-500"
                    v-model.number="transactionType"
                    style="border-color: #14b8a6;">
                <label for="savingToCurrent" class="w-full py-4 ml-2 text-sm font-bold text-teal-600 ">From My
                    Savings to My Current</label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded" style="background-color: white;">
                <input id="currentToSaving" type="radio" value="2" name="bordered-radio"
                    class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    v-model.number="transactionType"
                    style="border-color: #14b8a6;">
                <label for="currentToSaving" class="w-full py-4 ml-2 text-sm font-bold text-teal-600">From My
                    Current To My Savings</label>
            </div>
            <div class="flex flex-col pl-4 border border-gray-200 rounded" style="background-color: white;">
                <div class="mt-3 flex items-center">
                    <input id="currentToCurrent" type="radio" value="3" name="bordered-radio"
                        class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        v-model.number="transactionType"
                        style="border-color: #14b8a6;">
                    <label for="currentToCurrent" class="ml-2 text-sm font-bold text-teal-600">From My Current to
                        Other Current</label>
                </div>
                <div class="flex items-center mt-2 mb-3">
                    <span class="text-teal-600 font-bold">IBAN:</span>
                    <input id="otherIban" type="text" placeholder="NL00INHO01234567800"
                        v-model="receiverIban"
                        class="pl-2 ml-2 bg-white border-teal-300 border focus:outline-none focus:ring-2 focus:ring-blue-500 w-48" />
                </div>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded" style="background-color: white;">
                <input id="deposit" type="radio" value="4" name="bordered-radio"
                    class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    v-model.number="transactionType"
                    style="border-color: #14b8a6;">
                <label for="deposit" class="w-full py-4 ml-2 text-sm font-bold text-teal-600">Deposit
                    Money</label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded" style="background-color: white">
                <input id="withdraw" type="radio" value="5" name="bordered-radio"
                    class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    v-model.number="transactionType"
                    style="border-color: #14b8a6;">
                <label for="withdraw" class="w-full py-4 ml-2 text-sm font-bold text-teal-600 ">Withdraw
                    Money</label>
            </div>
        </div>
        <div class="flex justify-center items-center ml-2 mt-5 mb-3">
            <span class="text-black text-3xl font-bold">Amount:</span>
            <input id="amount" type="number" placeholder="100.00"
                v-model="transaction.amount"
                class="pl-2 ml-4 bg-white border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 h-8 rounded"/>
            <span class="text-black font-bold text-xl ml-3">€</span>

        </div>

        <div style="display: flex; justify-content: center;">
            <router-link to="/customerDashboard"
                class="mx-2 mt-4 rounded-md bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4">
                Cancel
            </router-link>

            <button type="button" @click="makeTransaction()"
                class="mx-2 mt-4 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4">
                Confirm
            </button>

        </div>
    </div>
</template>

<script>
import axios from '../../axios-auth';
import { userStore } from '../../stores/user.js';
export default {
    name: "MakeTransaction",
    data() {
        return {
            transaction: {
                accountFrom: {
                    iban: ""
                },
                accountTo: {
                    iban: ""
                },
                amount: "",
            },
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
            },
            transactionType: "1",
            receiverIban: "",
            store: userStore()
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
        },
        makeTransaction() {
            console.log(typeof this.transactionType);
            switch (this.transactionType) {
                case "1":
                    this.transaction.accountFrom.iban = this.savingsAccount.iban;
                    this.transaction.accountTo.iban = this.currentAccount.iban;
                    break;
                case "2":
                    this.transaction.accountFrom.iban = this.currentAccount.iban;
                    this.transaction.accountTo.iban = this.savingsAccount.iban;
                    break;
                case "3":
                    this.transaction.accountFrom.iban = this.currentAccount.iban;
                    this.transaction.accountTo.iban = this.receiverIban;
                    break;
                case "4":
                    this.transaction.accountFrom.iban = "NL01INHO0000000001";
                    this.transaction.accountTo.iban = this.currentAccount.iban;
                    break;
                case "5":
                    this.transaction.accountFrom.iban = this.currentAccount.iban;
                    this.transaction.accountTo.iban = "NL01INHO0000000001";
                    break;
                default:
                    break;
            };
            axios
                .post("/transactions", this.transaction, {
                    headers: {
                    Authorization: `Bearer ${this.store.getToken}`
                }
                })
                .then((res) => {
                    console.log(res.data);
                    this.$router.push("/customerDashboard")
                })
                .catch((error) => console.log(this.transaction.accountFrom.iban, this.transaction.accountTo.iban));
        }
    }
};
</script>

<style></style>