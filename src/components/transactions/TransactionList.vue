<template>
    <main>
        <div class="container mx-auto py-8">
            <h2 class="text-2xl font-bold mb-4">Inholland Bank Transaction List</h2>
            <div class="mb-4 flex">
                <label class="mr-2">Date From:</label>
                <input type="date" v-model="dateFrom" class="border border-gray-300 rounded px-2 py-1">
            </div>
            <div class="mb-4 flex">
                <label class="mr-2">Date To:</label>
                <input type="date" v-model="dateTo" class="border border-gray-300 rounded px-2 py-1">
            </div>
            <div class="overflow-x-auto">
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
                            <transaction-list-item v-for="transaction in transactions" :key="transaction.ibanOfSender"
                                :transaction='transaction' />
                        </tbody>
                    </table>
            </div>
        </div>
    </main>
</template>

<script>
import axios from '../../axios-auth';

import TransactionListItem from './TransactionListItem.vue';

export default {
    name: 'TransactionList',
    components: {
        TransactionListItem,
    },
    data() {
        return {
            transactions: [],
        };
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {
            const token = localStorage.getItem('token');
            axios
                .get("transactions", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((result) => {
                    console.log(result);
                    this.transactions = result.data;
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>
  
<style>
input[type="date"] {
    /* Tailwind CSS classes */
    border-width: 1px;
    border-color: #D1D5DB;
    border-radius: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>