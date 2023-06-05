<template>
    <main>
        <div class="h-screen container mx-auto py-8">
            <div class="flex items-center justify-between">
                <p class="text-4xl font-bold mx-5" style="margin-top: 7rem;">Welcome back to Inholland Bank, {{
                    user.firstName }}
                    {{ user.lastName }}</p>

                <router-link to="/customerDashboard"
                    class="bg-white hover:bg-teal-500 text-teal-700 text-teal font-bold py-2 px-4 rounded"
                    active-class="active">To your Profile</router-link>
            </div>
            <div class="grid grid-cols-2 gap-4 my-5">
                <div class="col-span-1">
                    <router-link to="/bankAccountList"
                        class="w-full h-50 block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mb-2"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        display: flex; justify-content: center; align-items: center; 
                        ">
                        <img src="/transfer-icon.png" alt="Image" class="inline-block h-10 w-10 mr-5">
                        SEE ALL BANK ACCOUNTS
                    </router-link>


                    <router-link to="/users"
                        class="w-full h-50 block bg-white text-teal-500 hover:text-teal-500 font-bold py-2 px-4 rounded mb-2"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        display: flex; justify-content: center; align-items: center; 
                        ">
                        <img src="/search-icon.png" alt="Image" class="inline-block h-9 w-7 mr-5">
                        SEE ALL USERS
                    </router-link>

                    <router-link to="/makeTransaction"
                        class="w-full h-50 block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mb-2"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        display: flex; justify-content: center; align-items: center; 
                        ">
                        <img src="/transfer-icon.png" alt="Image" class="inline-block h-10 w-10 mr-5">
                        Make a Transaction for a Customer
                    </router-link>

                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from '../../axios-auth';

export default {
    name: 'EmployeeDashboardView',
    data() {
        return {
            user: {
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
                dayLimit: 0.0,
                transactionLimit: 0.0
            }
        }
    },
    mounted() {
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
            })
            .catch((error) => console.log(error));
    },
};
</script>