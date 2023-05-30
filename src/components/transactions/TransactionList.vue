<template>
    <main>
        <div class="container mx-auto py-8">
            <h2 class="text-2xl font-bold mb-4">Inholland Bank Transaction List</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Iban of Sender</th>
                            <th class="py-2 px-4 border-b">Iban of Receiver</th>
                            <th class="py-2 px-4 border-b">Amount</th>
                            <th class="py-2 px-4 border-b">Date of Transaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        <transaction-list-item v-for="transaction in transactions" :key="transaction.ibanOfSender" :transaction='transaction' @update="update" />
                    </tbody>
                </table>
            </div>
            <router-link to="/register" class="font-semibold leading-6 text-teal-600 hover:text-teal-500"
            active-class="active">Make Transaction</router-link>
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
            axios
                .get("transactions")
                .then((result) => {
                    console.log(result);
                    this.users = result.data;
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>
  
<style></style>