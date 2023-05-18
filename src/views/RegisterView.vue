<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an Account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                    <div class="mt-2">
                        <input id="firstName" name="firstName" type="text" autocomplete="firstName" required=""
                            placeholder="   First Name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                    <div class="mt-2">
                        <input id="lastName" name="lastName" type="text" autocomplete="lastName" required=""
                            placeholder="   Last Name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required=""
                            placeholder="    example@email.com"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="phoneNumber" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                    <div class="mt-2">
                        <input id="phoneNumber" name="phoneNumber" type="tel" autocomplete="tel" required=""
                            placeholder="   +31 0 00000000"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="new-password" required=""
                            placeholder="   ***********"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                        Password</label>
                    <div class="mt-2">
                        <input id="confirm_password" name="confirm_password" type="password" autocomplete="new-password"
                            required="" placeholder="   ***********"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Create
                        Account</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Already a member?
                {{ ' ' }}
                <router-link to="/login" class="font-semibold leading-6 text-teal-600 hover:text-teal-500"
                    active-class="active">Click here to login</router-link>
        </p>
    </div>
</div></template>

<script>
export default {
    name: 'RegisterView'
}
</script>

<style scoped></style>