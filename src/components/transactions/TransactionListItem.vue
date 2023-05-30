<template>
    <tr>
        <td class="py-2 px-4 border-b">{{ transaction.senderIban }}</td>
        <td class="py-2 px-4 border-b">{{ transaction.receiverIban }}</td>
        <td class="py-2 px-4 border-b">{{ transaction.amount }}</td>
        <td class="py-2 px-4 border-b">{{ transaction.date }}</td>
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