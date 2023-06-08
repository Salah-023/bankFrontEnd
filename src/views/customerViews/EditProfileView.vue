<template>
    <main>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Edit Profile Details
                </h2>
            </div>

            <div class="my-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                    class="my-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert">
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


                <form ref="form" class="space-y-6">
                    <div>
                        <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                        <div class="mt-2">
                            <input id="firstName" name="firstName" type="text" autocomplete="firstName" required=""
                                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                                v-model="user.firstName" />
                        </div>
                    </div>

                    <div>
                        <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                        <div class="mt-2">
                            <input id="lastName" name="lastName" type="text" autocomplete="lastName" required=""
                                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                                v-model="user.lastName" />
                        </div>
                    </div>

                    <div>
                        <label for="phoneNumber" class="block text-sm font-medium leading-6 text-gray-900">Phone
                            Number</label>
                        <div class="mt-2">
                            <input id="phoneNumber" name="phoneNumber" type="tel" autocomplete="tel" required=""
                                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                                v-model="user.phone" />
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required=""
                                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                                v-model="user.email" />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="new-password" required=""
                                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                                v-model="user.password" />
                        </div>
                    </div>

                    <div>
                        <label for="passwordAgain" class="block text-sm font-medium leading-6 text-gray-900">Confirm New
                            Password</label>
                        <div class="mt-2">
                            <input id="passwordAgain" name="passwordAgain" type="password" autocomplete="new-passwordAgain"
                                required=""
                                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div style="display: flex; justify-content: center;">
                        <router-link to="/customerDashboard"
                            class="mx-3 mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </router-link>
                        <button @click="updateUser" type="button"
                            class="mx-3 mt-4 rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from '../../axios-auth';

export default {
    name: "EditProfileView",
    props: {
        id: String,
    },
    data() {
        return {
            user: {
                id: "",
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
                password: ""
            },
            errorText: '',
            successText: '',
            hasErrors: false,
            hasSuccess: false
        };
    },
    methods: {
        updateUser() {
            if (this.user.firstName.trim() === '' && this.user.lastName.trim() === '' && this.user.email.trim() === '' && this.user.phone.trim() === '') {
                this.errorText = 'Please fill in all the required fields, besides the password unless you want to change your password of course.';
                return;
            }
            const token = localStorage.getItem('token');
            axios
                .put("/users/" + this.user.id, this.user, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    this.successText = "Profile details have been updated successfully. "
                    this.hasSuccess = true;
                    this.$refs.form.reset();
                })
                .catch((error) => {
                    console.log(error);
                    console.log(this.user);
                    this.errorText = "There was a problem while saving the profile details. Please try again.";
                    this.hasErrors = true;
                });
        },
    },
    mounted() {
        this.errorText = "";
        this.successText = "";
        const token = localStorage.getItem('token');
        axios
            .get("users/email/" + localStorage.getItem('username'), {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((result) => {
                console.log(result);
                this.user = result.data;
                this.user.transactionLimit = null;
                this.user.dayLimit = null;
                console.log(this.user);
            })
            .catch((error) => console.log(error));
    }
};
</script>
  