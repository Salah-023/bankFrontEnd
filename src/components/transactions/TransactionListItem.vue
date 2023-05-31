<template>
    <tr>
        <td class="py-2 px-4 border-b">{{ transaction.accountFrom.iban }}</td>
        <td class="py-2 px-4 border-b">{{ transaction.accountTo.iban }}</td>
        <td class="py-2 px-4 border-b">{{ transaction.amount }}</td>
        <td class="py-2 px-4 border-b">{{ transaction.timeStamp.join(',') }}</td>
    </tr>
</template>
  
<script>
import axios from '../../axios-auth';
export default {
    name: "TransactionListItem",
    props: {
        transaction: Object,
    },
};
</script>
  
<style></style>