<template>
    <main>
        <div class="h-screen container mx-auto py-8">
            <div class="flex items-center justify-between">
                <p class="text-4xl font-bold mx-5" style="margin-top: 7rem;">Welcome to Inholland Bank, {{ user.firstName }}
                    {{ user.lastName }}</p>

                <router-link to="/editProfile"
                    class="bg-white hover:bg-teal-500 text-teal-700 text-teal font-bold py-2 px-4 rounded"
                    active-class="active">Edit Profile</router-link>
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
                                <th class="py-2 px-4 border-b">Date</th>
                                <th class="py-2 px-4 border-b">Sender IBAN</th>
                                <th class="py-2 px-4 border-b">Receiver IBAN</th>
                                <th class="py-2 px-4 border-b">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
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
            sentTransactions: [],
            receivedTransactions: [],
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

                // Additional GET request for Transactions
                axios
                    .get("transactions", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then((transactionResult) => {
                        console.log(transactionResult);
                        this.sentTransactions = transactionResult.data;
                    })
                    .catch((transactionError) => console.log(transactionError));
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