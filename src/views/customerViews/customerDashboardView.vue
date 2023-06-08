<template>
    <main>
        <div class="container mx-auto py-8">
            <div class="flex items-center justify-between">
                <p class="text-4xl font-bold mx-5" style="margin-top: 7rem;">Welcome to Inholland Bank, {{ user.firstName }}
                    {{ user.lastName }}</p>

                <router-link to="/editProfile"
                    class="bg-white hover:bg-teal-500 text-teal-700 text-teal font-bold py-2 px-4 rounded"
                    active-class="active">Profile Details/Edit Profile</router-link>
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
                                <p class="text-lg">Balance: € {{ currentAccount.balance }}</p>
                                <p class="text-lg">Limit: € {{ currentAccount.absoluteLimit }}</p>
                            </div>
                            <div class="rounded-lg bg-white p-4">
                                <p class="text-lg text-center font-bold">Savings Account</p>
                                <p class="text-lg">IBAN: {{ savingsAccount.iban }}</p>
                                <p class="text-lg">Balance: € {{ savingsAccount.balance }}</p>
                                <p class="text-lg">Limit: € {{ savingsAccount.absoluteLimit }}</p>
                            </div>

                        </div>
                        <div class="mt-3">
                            <p class=" text-xl font-bold">
                                <span class="rounded bg-white-200 px-2 py-2">Total: € {{ savingsAccount.balance +
                                    currentAccount.balance }}</span>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col-span-1">
                    <router-link to="/makeTransaction"
                        class="w-full h-50 block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mb-2"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        display: flex; justify-content: center; align-items: center; 
                        ">
                        <img src="/transfer-icon.png" alt="Image" class="inline-block h-10 w-10 mr-5">
                        MAKE A TRANSACTION
                    </router-link>


                    <router-link to="/searchForIban"
                        class="w-full h-50 block bg-white text-teal-500 hover:text-teal-500 font-bold py-2 px-4 rounded mb-2"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        display: flex; justify-content: center; align-items: center; 
                        ">
                        <img src="/search-icon.png" alt="Image" class="inline-block h-9 w-7 mr-5">
                        SEARCH FOR AN IBAN
                    </router-link>
                </div>
            </div>

            <div class="flex">
                <div class="w-1/2 pr-4">
                    <div class="mt-4 mx-4">
                        <label class="text-lg font-bold">Date From:</label>
                        <input type="date" v-model="dateFrom"
                            class="py-2 px-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    </div>
                    <div class="mt-2 mx-4">
                        <label class="text-lg font-bold">Date To:</label>
                        <input type="date" v-model="dateTo"
                            class="py-2 px-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    </div>
                </div>

                <div class="w-1/2 pl-4">
                    <div class="mt-4 mx-4">
                        <label class="text-lg font-bold">Amount:</label>
                        <input type="number" v-model="amount">
                        <div class="flex items-center mt-2">
                            <input type="radio" id="amountEquals" value="equals" v-model="amountComparison" class="mr-2">
                            <label for="amountEquals" class="text-lg">Equals</label>
                        </div>
                        <div class="flex items-center mt-2">
                            <input type="radio" id="amountGreaterThan" value="greaterThan" v-model="amountComparison"
                                class="mr-2">
                            <label for="amountGreaterThan" class="text-lg">Greater Than</label>
                        </div>
                        <div class="flex items-center mt-2">
                            <input type="radio" id="amountLessThan" value="lessThan" v-model="amountComparison"
                                class="mr-2">
                            <label for="amountLessThan" class="text-lg">Less Than</label>
                        </div>
                        <div class="flex items-center mt-2">
                            <input type="radio" id="amountReset" value="reset" v-model="amountComparison" class="mr-2">
                            <label for="amountReset" class="text-lg">Reset</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="w-1/2 pr-4">
                    <p class="text-2xl font-bold mt-4 mx-4">My Transactions</p>

                    <table class="mt-3 min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b">Iban of Sender</th>
                                <th class="py-2 px-4 border-b">Iban of Receiver</th>
                                <th class="py-2 px-4 border-b">Amount</th>
                                <th class="py-2 px-4 border-b">Date of Transaction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <transaction-list-item v-for="transaction in sentTransactions" :key="transaction.ibanOfSender"
                                :transaction='transaction' />
                        </tbody>
                    </table>
                </div>
                <div class="w-1/2 pl-4">
                    <p class="text-2xl font-bold mt-4 mx-4">Received Transactions</p>
                    <table class="mt-3 min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b">Iban of Sender</th>
                                <th class="py-2 px-4 border-b">Iban of Receiver</th>
                                <th class="py-2 px-4 border-b">Amount</th>
                                <th class="py-2 px-4 border-b">Date of Transaction</th>
                            </tr>
                        </thead>
                        <tbody><transaction-list-item v-for="transaction in receivedTransactions"
                                :key="transaction.ibanOfSender" :transaction='transaction' />
                        </tbody>
                    </table>
                </div>
            </div>
            <router-link to="/employeeDashboard" v-if="user.role === 'EMPLOYEE'"
                class="bg-white hover:bg-teal-500 text-teal-700 text-teal font-bold py-2 px-4 rounded"
                active-class="active">Back to Employee Dashboard</router-link>
        </div>
    </main>
</template>
  
<script>
import axios from '../../axios-auth';
import TransactionListItem from '../../components/transactions/TransactionListItem.vue';


export default {
    name: 'TransactionList',
    components: {
        TransactionListItem,
    },
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
            },
            sentTransactions: [],
            receivedTransactions: [],
            sortedTransactions: [],
            dateFrom: "",
            dateTo: "",
            amount: 0.0,
            amountComparison: ''
        };
    }, watch: {
        dateFrom: {
            handler() {
                this.fetchTransactions(this.currentAccount.iban);
                this.fetchTransactions(this.savingsAccount.iban);
            },
            deep: true,
        },
        dateTo: {
            handler() {
                this.fetchTransactions(this.currentAccount.iban);
                this.fetchTransactions(this.savingsAccount.iban);
            },
            deep: true,
        },
        amountComparison(newValue) {
            if (newValue !== 'reset') {
                this.fetchTransactions(this.currentAccount.iban);
                this.fetchTransactions(this.savingsAccount.iban);
            } else {
                this.amount = 0.0;
                this.amountComparison = '';
            }
        }
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
                this.fetchTransactions(this.currentAccount.iban);
                this.fetchTransactions(this.savingsAccount.iban);
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
        returnNameOfVariable() {
            if (this.amountComparison === 'equals') {
                return 'amount';
            } else if (this.amountComparison === 'greaterThan') {
                return 'lowestAmount';
            } else if (this.amountComparison === 'lessThan') {
                return 'highestAmount';
            } else if (this.amountComparison === 'reset') {
                this.amount = 0.0;
                this.amountComparison = '';
                return null;
            }
        },
        fetchTransactions(accountIban) {
            const paramName = this.returnNameOfVariable();
            this.sentTransactions = [];
            this.receivedTransactions = [];
            const token = localStorage.getItem('token');
            axios
                .get("transactions", {
                    params: {
                        accountFrom: accountIban,
                        dateFrom: this.dateFrom,
                        dateTo: this.dateTo,
                        [paramName]: this.amount
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((transactionResult) => {
                    console.log(transactionResult);
                    const newTransactions = transactionResult.data.map((transaction) => {
                        return {
                            ...transaction,
                            accountIban: accountIban
                        };
                    });
                    this.sentTransactions = [...this.sentTransactions, ...newTransactions];
                    this.sentTransactions = this.sortTransactions(this.sentTransactions);
                })
                .catch((transactionError) => console.log(transactionError));

            // Fetch transactions for accountTo
            axios
                .get("transactions", {
                    params: {
                        accountTo: accountIban,
                        dateFrom: this.dateFrom,
                        dateTo: this.dateTo,
                        [paramName]: this.amount
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((transactionResult) => {
                    console.log(transactionResult);
                    const newTransactions = transactionResult.data.map((transaction) => {
                        return {
                            ...transaction,
                            accountIban: accountIban
                        };
                    });
                    this.receivedTransactions = [...this.receivedTransactions, ...newTransactions];
                    this.receivedTransactions = this.sortTransactions(this.receivedTransactions);
                })
                .catch((transactionError) => console.log(transactionError));
        }
        ,
        sortTransactions(transactions) {
            this.sortedTransactions = transactions.sort((a, b) => {
                const dateA = new Date(a.timestamp);
                const dateB = new Date(b.timestamp);
                return dateB - dateA;
            });
            return this.sortedTransactions;
        }
    }
};
</script>