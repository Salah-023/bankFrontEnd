<template>
    <div class="container mx-auto py-8">
        <h2 class="text-2xl font-bold mb-4">Bank Accounts</h2>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th class="py-2 px-4 border-b">IBAN</th>
                        <th class="py-2 px-4 border-b">User ID</th>
                        <th class="py-2 px-4 border-b">User First Name</th>
                        <th class="py-2 px-4 border-b">User Last Name</th>
                        <th class="py-2 px-4 border-b">Account Type</th>
                        <th class="py-2 px-4 border-b">Balance</th>
                        <th class="py-2 px-4 border-b">Absolute Limit</th>
                        <th class="py-2 px-4 border-b">Status</th>
                        <th class="py-2 px-4 border-b"></th>
                        <th class="py-2 px-4 border-b"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="account in bankAccounts" :key="account.iban">
                        <td class="py-2 px-4 border-b">{{ account.iban }}</td>
                        <td class="py-2 px-4 border-b">{{ account.userId }}</td>
                        <td class="py-2 px-4 border-b">{{ account.userFirstName }}</td>
                        <td class="py-2 px-4 border-b">{{ account.userLastName }}</td>
                        <td class="py-2 px-4 border-b">{{ account.accountType }}</td>
                        <td class="py-2 px-4 border-b">{{ account.balance }}</td>
                        <td class="py-2 px-4 border-b">{{ account.absoluteLimit }}</td>
                        <td class="py-2 px-4 border-b">{{ account.status }}</td>
                        <td class="py-2 px-4 border-b">
                            <button class="text-blue-500 hover:text-blue-700">Edit</button>
                        </td>
                        <td class="py-2 px-4 border-b">
                            <button class="text-red-500 hover:text-red-700">Deactivate</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "BankAccountsList",
    data() {
        return {
            bankAccounts: [
                {
                    iban: "ABC123",
                    userId: "1",
                    userFirstName: "John",
                    userLastName: "Doe",
                    accountType: "Savings",
                    balance: "1000.00",
                    absoluteLimit: "5000.00",
                    status: "Active",
                },
                {
                    iban: "ABC123",
                    userId: "1",
                    userFirstName: "John",
                    userLastName: "Doe",
                    accountType: "Current",
                    balance: "150.00",
                    absoluteLimit: "5000.00",
                    status: "Active",
                },
                {
                    iban: "XYZ789",
                    userId: "2",
                    userFirstName: "Emma",
                    userLastName: "Tyler",
                    accountType: "Current",
                    balance: "2000.00",
                    absoluteLimit: "10000.00",
                    status: "Active",
                },
                // Add more bank accounts here...
            ],
        };
    },
};
</script>
  
  