import { defineStore } from 'pinia';
import axios from '../axios-auth';
import router from '../router/index.js'
export const userStore = defineStore('userStore', {
    state: () => ({
        token: '',
        username: '',
        roles: []
    }),
    getters: {
        isAuthenticated: (state) => state.token != '',
        getToken: (state) => state.token,
        getRoles: (state) => state.roles
    },
    actions: {
        autologin() {
            if (localStorage["token"]) {
                this.token = localStorage["token"];
            }
        },
        login(username, password) {
            return new Promise((resolve, reject) => {
                axios.post("auth/login", {
                    username: username,
                    password: password
                }).then(response => {
                    this.token = response.data.token;
                    this.username = username;
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                    localStorage.setItem('token', this.token); // Store the token in local storage
                    localStorage.setItem('username', this.username); // Store the username in local storage
                    resolve()
                })
                    .catch((error) => reject(error));
            })
        },
        logout() {
            this.token = '';
            this.username = '';
            localStorage.removeItem('username');
            localStorage.removeItem('token');
        },
        redirctUser() {
            axios
                .get("users/email/" + this.username, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                })
                .then((result) => {
                    console.log(result.data);
                    this.roles = result.data.roles;
                    if (result.data.roles.includes('ROLE_CUSTOMER') && !result.data.roles.includes('ROLE_EMPLOYEE')) {
                        router.push('/customerDashboard');
                    }
                    else if (result.data.roles.includes('ROLE_EMPLOYEE')) {
                        router.push('/users');
                    }
                })
                .catch((error) => console.log(error));

        }
    }
});