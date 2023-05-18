<template>
    <main>
        <div class="container mx-auto py-8">
            <h2 class="text-2xl font-bold mb-4">Inholland Bank User List</h2>
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
                        <tr v-for="user in users" :key="user.userId">
                            <td class="py-2 px-4 border-b">{{ user.userId }}</td>
                            <td class="py-2 px-4 border-b">{{ user.email }}</td>
                            <td class="py-2 px-4 border-b">{{ user.firstName }}</td>
                            <td class="py-2 px-4 border-b">{{ user.lastName }}</td>
                            <td class="py-2 px-4 border-b">{{ user.phoneNumber }}</td>
                            <td class="py-2 px-4 border-b">{{ user.dayLimit }}</td>
                            <td class="py-2 px-4 border-b">{{ user.transactionLimit }}</td>
                            <td class="py-2 px-4 border-b">{{ user.role }}</td>
                            <td class="py-2 px-4 border-b">{{ user.currentAccountIBAN }}</td>
                            <td class="py-2 px-4 border-b">{{ user.savingsAccountIBAN }}</td>
                            <td class="py-2 px-4 border-b">
                                <button class="text-blue-500 hover:text-blue-700">Edit</button>
                            </td>
                            <td class="py-2 px-4 border-b">
                                <button class="text-red-500 hover:text-red-700">Delete</button>
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
    name: "UsersList",
    data() {
        return {
            users: [
                { userId: "1", email: "john@email.com", firstName: "John", lastName: "Doe", phoneNumber: "3168457645", dayLimit: "500.00", transactionLimit: "1000.00", role: "Customer", currentAccountIBAN: "XXX", savingsAccountIBAN: "YYY" },
                { userId: "2", email: "emma@email.com", firstName: "Emma", lastName: "Tyler", phoneNumber: "3134357645", dayLimit: "500.00", transactionLimit: "1000.00", role: "Customer", currentAccountIBAN: "XXX", savingsAccountIBAN: "YYY" },
                { userId: "3", email: "jane@email.com", firstName: "Jane", lastName: "Smith", phoneNumber: "3168787645", dayLimit: "500.00", transactionLimit: "1000.00", role: "Customer", currentAccountIBAN: "XXX", savingsAccountIBAN: "YYY" }
            ]
        };
    },

};
</script>
