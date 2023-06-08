<template>
    <div class="h-screen flex justify-center items-center">
        <div class="max-w-md">
            <div class="mb-5" id="transaction-header">
                <h1 class="mt-5 mb-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">Make a Transaction
                    For a Customer
                </h1>
            </div>
    
            <h1 class="mt-5 mb-5 text-center text-2xl font-bold leading-9 tracking-tight">Transaction Between Customer
                Accounts</h1>
    
            <form class="text-center">
                <div class="mb-4">
                    <label for="fromAccount" class="block mb-2 text-sm font-bold text-black">From account IBAN:</label>
                    <input id="fromAccount" type="text" class="w-64 px-3 py-2 border border-teal-500 rounded" placeholder="Enter From Account IBAN">
                </div>
                <div class="mb-4">
                    <label for="toAccount" class="block mb-2 text-sm font-bold text-black">To account IBAN:</label>
                    <input id="toAccount" type="text" class="w-64 px-3 py-2 border border-teal-500 rounded" placeholder="Enter To Account IBAN">
                </div>
                <div class="mb-4">
                    <label for="amount" class="block mb-2 text-sm font-bold text-black">Amount:</label>
                    <input id="amount" type="text" class="w-64 px-3 py-2 border border-teal-500 rounded w-24" placeholder="100.00 €">
                </div>
                <router-link to="/employeeDashboard"
                    class="mx-2 mt-4 rounded-md bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4">
                    Cancel
                </router-link>
    
                <button type="submit"
                    class="mx-2 mt-4 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4">
                    Confirm
                </button>
            </form>
        </div>
    </div>
</template>

<script>

</script>

