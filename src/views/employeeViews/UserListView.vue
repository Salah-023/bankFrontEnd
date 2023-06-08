<template>
    <main>
        <div class="mx-5 py-8">
            <h2 class="text-2xl font-bold mb-4">Inholland Bank User List</h2>
            <div v-if="hasErrors"
                    class="my-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert">
                    <strong class="font-bold"> Error: </strong>
                    <span class="block sm:inline" style="z-index: 1;">{{ errorText }}</span>
                    <span class="absolute top-0 right-0 mt-1 mr-1">
                        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" @click="hasErrors = false">
                            <title>Close</title>
                            <path
                                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </span>
                </div>
                <div v-if="hasSuccess"
                    class="my-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert">
                    <strong class="font-bold"> Success: </strong>
                    <span class="block sm:inline" style="z-index: 1;">{{ successText }}</span>
                    <span class="absolute top-0 right-0 mt-1 mr-1">
                        <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" @click="hasSuccess = false">
                            <title>Close</title>
                            <path
                                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </span>
                </div>
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
                        <user-list-item v-for="user in users" :key="user.firstName" :user='user' @update="update" @popUpSuccessText = "popUpSuccessText" @popUpErrorText = "popUpErrorText"/>

                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from '../../axios-auth';
import UserListItem from '../../components/users/UserListItem.vue';
import { userStore } from '../../stores/user.js';

export default {
    name: 'UserList',
    components: {
        UserListItem,
    },
    data() {
        return {
            users: [],
            store: userStore(),
            errorText: '',
            successText: '',
            hasErrors: false,
            hasSuccess: false
        };
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {
            axios
                .get("users", {
                    headers: {
                        Authorization: `Bearer ${this.store.getToken}`
                    }
                })
                .then((result) => {
                    console.log(result);
                    this.users = result.data;
                })
                .catch((error) => console.log(error));
        },
        applyFilter() {
            if (this.filterWithoutBankAccounts) {
                axios
                    .get("users?hasAccount=false", {
                        headers: {
                            Authorization: `Bearer ${this.store.getToken}`
                        }
                    })
                    .then((result) => {
                        console.log(result);
                        this.users = result.data;
                    })
                    .catch((error) => console.log(error));
            } else {
                this.update();
            }
        },
        popUpSuccessText(text){
            this.successText = text;
            this.hasSuccess = true;            
        },
        popUpErrorText(text){
            this.errorText = text;
            this.hasErrors = true;            
        }
    },
};
</script>
  
<style></style>