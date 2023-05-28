<template>
    <tr>
        <td class="py-2 px-4 border-b">{{ user.id }}</td>
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
            <button class="text-blue-500 hover:text-blue-700" @click="editUser(user.id)">Edit</button>&nbsp;&nbsp;
            <!-- <router-link to="/editUser" class="text-blue-500 hover:text-blue-700" active-class="active">Edit</router-link> -->

        </td>
        <td class="py-2 px-4 border-b">
            <button v-if="hasNoBankAccounts" class="text-red-500 hover:text-red-700" @click="deleteUser(user.id)">Delete</button>
        </td>
    </tr>
</template>
  
<script>
import axios from '../../axios-auth';
const token = localStorage.getItem('token');

export default {
    name: "UserListItem",
    props: {
        user: Object,
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
                .delete("users/"+ id, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((result) => {
                    console.log(result);
                    this.$emit('update')
                })
                .catch((error) => console.log(error));
        }
    }, computed: {
        hasNoBankAccounts() {
            return !this.user.bankAccounts || this.user.bankAccounts.length === 0;
        }
    }
};
</script>
  
<style></style>