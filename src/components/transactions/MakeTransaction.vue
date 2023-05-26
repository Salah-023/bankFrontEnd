<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Make a Transaction</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="senderIban" class="block text-sm font-medium leading-6 text-gray-900">Iban of Sender</label>
                    <div class="mt-2">
                        <input id="senderIban" name="senderIban" type="text" autocomplete="senderIban" required=""
                            placeholder="   NL00 BANK 0000 0000 00"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                
                <div>
                    <label for="receiverIban" class="block text-sm font-medium leading-6 text-gray-900">Iban of Receiver</label>
                    <div class="mt-2">
                        <input id="receiverIban" name="receiverIban" type="text" autocomplete="receiverIban" required=""
                            placeholder="   NL00 BANK 0000 0000 00"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="amount" class="block text-sm font-medium leading-6 text-gray-900">Amount</label>
                    <div class="mt-2">
                        <input id="amount" name="amount" type="number" autocomplete="amount" required=""
                            placeholder="  45.50"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">
                        Make Transaction</button>
                </div>
            </form>

             <router-link to="/transactionList" class="font-semibold leading-6 text-teal-600 hover:text-teal-500"
               active-class="active">Click here to see all transactions</router-link>
    </div>
    </div>
</template>
<script>
export default {
    name: 'MakeTransactionView'
}
</script>

<style scoped></style>