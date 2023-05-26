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
                            <th class="py-2 px-4 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transaction in transactions">
                            <td class="py-2 px-4 border-b">{{ transaction.senderIban }}</td>
                            <td class="py-2 px-4 border-b">{{ transaction.receiverIban }}</td>
                            <td class="py-2 px-4 border-b">{{ transaction.amount }}</td>
                            <td class="py-2 px-4 border-b">{{ transaction.date }}</td>
                            <td class="py-2 px-4 border-b">
                                <button class="text-blue-500 hover:text-blue-700">Make Transaction</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "TransactionList",
    data() {
        return {
            transactions: [
                { senderIban: "NL00 BANK 0000 0000 01", receiverIban: "NL00 BANK 0000 0000 02", amount: "60.75", date: "2023-05-20T10:30:20" },
                { senderIban: "NL00 BANK 0000 0000 02", receiverIban: "NL00 BANK 0000 0000 03", amount: "300", date: "2023-05-20T10:35:13" },
                { senderIban: "NL00 BANK 0000 0000 03", receiverIban: "NL00 BANK 0000 0000 04", amount: "202.34", date: "2023-05-20T10:44:47" }
            ]
        };
    },

};
</script>