<template>
    <main>
        <div class="container mx-auto py-8">
            <h2 class="text-2xl font-bold mb-4">Inholland Bank Accounts List</h2>
            <div class="flex justify-end mb-4">
                <label class="flex items-center">
                    <input type="checkbox" v-model="showOnlyActiveBankAccounts" @change="applyFilter">
                    <span class="ml-2">Show Only Active Bank Accounts</span>
                </label>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">IBAN</th>
                            <th class="py-2 px-4 border-b">Belongs To</th>
                            <th class="py-2 px-4 border-b">Limit</th>
                            <th class="py-2 px-4 border-b">Balance</th>
                            <th class="py-2 px-4 border-b">Type</th>
                            <th class="py-2 px-4 border-b">Status</th>
                            <th class="py-2 px-4 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <bankAccount-list-item v-for="bankAccount in bankAccounts" :key="bankAccount.iban"
                            :bankAccount='bankAccount' @update="update" />
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from '../../axios-auth';

import BankAccountListItem from '../../components/bankAccounts/BankAccountListItem.vue';

export default {
    name: 'BankAccountList',
    components: {
        BankAccountListItem,
    },
    data() {
        return {
            bankAccounts: [],
        };
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {
            const token = localStorage.getItem('token');
            axios
                .get("bankAccounts", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((result) => {
                    console.log(result);
                    this.bankAccounts = result.data;
                })
                .catch((error) => console.log(error));
        },
        /*applyFilter() {
            if (this.filterWithoutBankAccounts) {
                axios
                    .get("users?hasAccount=false")
                    .then((result) => {
                        console.log(result);
                        this.users = result.data;
                    })
                    .catch((error) => console.log(error));
            } else {
                this.update();
            }
        }*/
    },
};
</script>
  
<style></style>