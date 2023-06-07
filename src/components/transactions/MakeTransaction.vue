<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Make a Transaction</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <label v-if="this.store.getRoles.includes('ROLE_CUSTOMER')" class="flex items-center">
                    <input type="checkbox" v-model="filterForSavingsAccount">
                    <span class="ml-2">Use your savings account</span>
                </label>
            <form ref="form" class="space-y-6">
                <div v-if="this.store.getRoles.includes('ROLE_EMPLOYEE')">
                    <label  for="accountFrom" class="block text-sm font-medium leading-6 text-gray-900">Iban of Sender</label>
                    <div class="mt-2">
                        <input id="accountFrom" name="accountFrom" type="text" autocomplete="accountFrom" required=""
                            placeholder="   NL00 BANK 0000 0000 00"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" 
                            v-model="transaction.accountFrom.iban"/>
                    </div>
                </div>          
                <div v-if="!filterForSavingsAccount">
                    <label for="accountTo" class="block text-sm font-medium leading-6 text-gray-900">Iban of Receiver</label>
                    <div class="mt-2">
                        <input id="accountTo" name="accountTo" type="text" autocomplete="accountTo" required=""
                            placeholder="   NL00 BANK 0000 0000 00"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" 
                            v-model="accountTo"/>
                    </div>
                </div>

                <div>
                    <label for="amount" class="block text-sm font-medium leading-6 text-gray-900">Amount</label>
                    <div class="mt-2">
                        <input id="amount" name="amount" type="number" autocomplete="amount" required=""
                            placeholder="  45.50"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" 
                            v-model="transaction.amount"/>
                    </div>
                </div>

                <div>
                    <button type="button" @click="makeTransaction()"
                        class="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">
                        Make Transaction</button>
                </div>
            </form>

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
                accountFrom: Object,
                accountTo: Object,
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
                iban:""
            },
            savingsAccount: {
                iban:""
            },
            store: userStore(),
            filterForSavingsAccount:false
            };
    },
    mounted() {
        const token = localStorage.getItem('token');
        axios
            .get("users/email/" + localStorage.getItem('username'), {
                headers: {
                    Authorization: `Bearer ${this.store.getToken}`
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
            if (this.store.getRoles.includes('ROLE_CUSTOMER')) {
                if (this.filterForSavingsAccount) {
                    this.transaction.accountFrom = this.savingsAccount;
                    this.transaction.accountTo = this.currentAccount;
                } else {
                    this.transaction.accountFrom = this.currentAccount;
                    this.transaction.accountTo.iban=this.accountTo;
                }                               
            }
            axios
                .post("/transactions", this.transaction, {
                    headers: {
                    Authorization: `Bearer ${this.store.getToken}`
                }
                })
                .then((res) => {
                    console.log(res.data);
                    if (this.store.getRoles.includes('ROLE_EMPLOYEE')) {
                        this.$router.push("/employeeDashboard");
                    } else if (this.store.getRoles.includes('ROLE_CUSTOMER')) {
                        this.$router.push("/customerDashboard");
                    }
                })
                .catch((error) => console.log(error));
        }
    }
};
</script>

<style></style>