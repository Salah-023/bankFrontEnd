<template>
    <tr>
        <td class="py-2 px-4 border-b">{{ user.email }}</td>
        <td class="py-2 px-4 border-b">{{ user.firstName }}</td>
        <td class="py-2 px-4 border-b">{{ user.lastName }}</td>
        <td class="py-2 px-4 border-b">{{ user.phone }}</td>
        <td class="py-2 px-4 border-b">{{ user.dayLimit }}</td>
        <td class="py-2 px-4 border-b">{{ user.transactionLimit }}</td>
        <td class="py-2 px-4 border-b">{{ user.roles.join(', ') }}</td>

        <td class="py-2 px-4 border-b">{{ getCurrentAccount(user.bankAccounts) }}</td>
        <td class="py-2 px-4 border-b">{{ getSavingsAccount(user.bankAccounts) }}</td>
        <td class="py-2 px-4 border-b">
            <button v-if="hasNoBankAccounts" class="text-green-500 hover:text-green-700"
                @click="createBankAccount(user.id)">Create
                B.A</button>
        </td>
        <td class="py-2 px-4 border-b">
            <button class="text-blue-500 hover:text-blue-700" @click="editUser(user.id)">Edit</button>&nbsp;&nbsp;
        </td>
        <td class="py-2 px-4 border-b">
            <button v-if="hasNoBankAccounts" class="text-red-500 hover:text-red-700"
                @click="deleteUser(user.id)">Delete</button>
        </td>
    </tr>
</template>
  
<script>
import axios from '../../axios-auth';
import { userStore } from '../../stores/user.js';

export default {
    name: "UserListItem",
    props: {
        user: Object,
    },
    data() {
        return {
            store: userStore()
        };
    },
    methods: {
        getCurrentAccount(bankAccounts) {
            const currentAccount = bankAccounts.find(account => account.type === 'CURRENT');
            return currentAccount ? currentAccount.iban : '';
        },
        getSavingsAccount(bankAccounts) {
            const savingsAccount = bankAccounts.find(account => account.type === 'SAVINGS');
            return savingsAccount ? savingsAccount.iban : '';
        },
        editUser(id) {
            this.$router.push('/editUser/' + id);
        },
        deleteUser(id) {
            axios
                .delete("users/" + id, {
                    headers: {
                        Authorization: `Bearer ${this.store.getToken}`
                    }
                })
                .then((result) => {
                    console.log(result);
                    this.$emit('update');
                    this.$emit('popUpSuccessText', "User has been deleted successfully. ")
                })
                .catch((error) => { console.log(error);
                    this.$emit('popUpErrorText', "There was a problem while deleting the user. Please try again. ")
                });
        },
        createBankAccount(id) {
            const currentBankAccountDto = {
                userId: id,
                absoluteLimit: 100,
                balance: 0,
                type: "CURRENT"
            }
            axios.post("bankAccounts", currentBankAccountDto, {
                headers: {
                    Authorization: `Bearer ${this.store.getToken}`
                }
            })
            .catch((error) => { console.log(error);
                    this.$emit('popUpErrorText', "There was a problem while creating the Current Account. Please try again. ")
                });



            const savingsBankAccountDto = {
                userId: id,
                absoluteLimit: 100,
                balance: 0,
                type: "SAVINGS"
            }
            axios.post("bankAccounts", savingsBankAccountDto, {
                headers: {
                    Authorization: `Bearer ${this.store.getToken}`
                }
            })
                .then(() => {
                    this.$emit('update');
                    this.$emit('popUpSuccessText', "Current and Savings Accounts created successfully for the customer. ")
                })
                .catch((error) => { console.log(error);
                    this.$emit('popUpErrorText', "There was a problem while creating the Savings Account. Please try again. ")
                });
        }
    }, computed: {
        hasNoBankAccounts() {
            return !this.user.bankAccounts || this.user.bankAccounts.length === 0;
        }
    }
};
</script>
  
<style></style>