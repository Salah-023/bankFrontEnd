<template>
    <tr>
        <td class="py-2 px-4 border-b">{{ bankAccount.iban }}</td>
        <td class="py-2 px-4 border-b">{{ bankAccount.absoluteLimit }}</td>
        <td class="py-2 px-4 border-b">{{ bankAccount.balance }}</td>
        <td class="py-2 px-4 border-b">{{ bankAccount.type }}</td>
        <td class="py-2 px-4 border-b">{{ bankAccount.available ? 'Active' : 'Inactive' }}</td>
        <td class="py-2 px-4 border-b">
            <button class="text-blue-500 hover:text-blue-700" @click="editBankAccount(bankAccount.iban)">Edit</button>&nbsp;&nbsp;
        </td>
    </tr>
</template>
  
<script>
//import axios from '../../axios-auth';
export default {
    name: "BankAccountListItem",
    props: {
        bankAccount: Object,
    },
    methods: {
        editBankAccount(iban) {
            this.$router.push('/editBankAccount/' + iban);
        }
    }
};
</script>
  
<style></style>