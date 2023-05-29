import { defineStore } from 'pinia';
import axios from '../axios-auth';
export const userStore = defineStore('userStore', {
    state: () => ({
        token: '',
        username: '',
    }),
    getters: {
        isAuthenticated: (state) => state.token != '',
        getToken: (state) => state.token
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

        }
    }
});