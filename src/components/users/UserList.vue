<template>
    <main>
        <div class="container mx-auto py-8">
            <h2 class="text-2xl font-bold mb-4">Inholland Bank User List</h2>
            <div class="flex justify-end mb-4">
                <label class="flex items-center">
                    <input type="checkbox" v-model="filterWithoutBankAccounts" @change="applyFilter">
                    <span class="ml-2">Filter Users without Bank Accounts</span>
                </label>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">User ID</th>
                            <th class="py-2 px-4 border-b">E-mail</th>
                            <th class="py-2 px-4 border-b">First Name</th>
                            <th class="py-2 px-4 border-b">Last Name</th>
                            <th class="py-2 px-4 border-b">Phone</th>
                            <th class="py-2 px-4 border-b">Day Limit</th>
                            <th class="py-2 px-4 border-b">Transaction Limit</th>
                            <th class="py-2 px-4 border-b">Role</th>
                            <th class="py-2 px-4 border-b">Current Account IBAN</th>
                            <th class="py-2 px-4 border-b">Savings Account IBAN</th>
                            <th class="py-2 px-4 border-b"></th>
                            <th class="py-2 px-4 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <user-list-item v-for="user in users" :key="user.firstName" :user='user' @update="update" />

                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from '../../axios-auth';

import UserListItem from './UserListItem.vue';

export default {
    name: 'UserList',
    components: {
        UserListItem,
    },
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {
            axios
                .get("users")
                .then((result) => {
                    console.log(result);
                    this.users = result.data;
                })
                .catch((error) => console.log(error));
        },
        applyFilter() {
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
        }

    },
};
</script>
  
<style></style>