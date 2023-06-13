<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an Account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div v-if="hasErrors" class="my-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
                <strong class="font-bold"> Error: </strong>
                <span class="block sm:inline" style="z-index: 1;">{{ errorText }}</span>
                <span class="absolute top-0 right-0 mt-1 mr-1">
                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" @click="hasErrors = false">
                        <title>Close</title>
                        <path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>
            </div>
            <div v-if="hasSuccess"
                class="my-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold"> Success: </strong>
                <span class="block sm:inline" style="z-index: 1;">{{ successText }}</span>
                <span class="absolute top-0 right-0 mt-1 mr-1">
                    <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" @click="hasSuccess = false">
                        <title>Close</title>
                        <path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>
            </div>
            <form class="space-y-6">
                <div>
                    <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                    <div class="mt-2">
                        <input id="firstName" name="firstName" type="text" autocomplete="firstName" required="true"
                            placeholder="First Name"
                            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            v-model="firstName" />
                    </div>
                </div>

                <div>
                    <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                    <div class="mt-2">
                        <input id="lastName" name="lastName" type="text" autocomplete="lastName" required="true"
                            placeholder="Last Name"
                            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            v-model="lastName" />
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required="true"
                            placeholder="example@email.com"
                            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            v-model="email" />
                    </div>
                </div>

                <div>
                    <label for="phoneNumber" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                    <div class="mt-2">
                        <input id="phoneNumber" name="phoneNumber" type="tel" autocomplete="tel" required="true"
                            placeholder="+31 0 00000000"
                            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            v-model="phone" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="new-password" required="true"
                            placeholder="***********"
                            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            v-model="password" />
                    </div>
                </div>

                <div>
                    <label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                        Password</label>
                    <div class="mt-2">
                        <input id="confirm_password" name="confirm_password" type="password" autocomplete="new-password"
                            required="true" placeholder="***********"
                            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button @click="register" type="button"
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
    </div>
</template>

<script>
import axios from '../axios-auth';
export default {
    name: 'RegisterView',
    data() {
        return {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            password: '',
            errorText: '',
            successText: '',
            hasErrors: false,
            hasSuccess: false
        };
    }, methods: {
        register() {
            if (this.email.trim() === '' || this.firstName.trim() === '' || this.lastName.trim() === '' || this.phone.trim() === '' || this.password.trim() === '') {
                this.errorText = 'Please enter  all the required fields.';
                this.hasErrors = true;
                return;
            }

            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirm_password');
            if (passwordInput.value !== confirmPasswordInput.value) {
                this.errorText = 'Please make sure your passwords match.';
                this.hasErrors = true;
                return;
            }

            axios.post("auth/register", {
                email: this.email,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone
            })
                .then(() => {
                    this.successText = "Your account have been created successfully. Now you can login to your account. ";
                    this.hasSuccess = true;
                })
                .catch((error) => {
                    console.log(error);
                    this.errorText = error.response.data.message;
                    this.hasErrors = true;
    });
        }
    }
}
</script>

<style scoped></style>