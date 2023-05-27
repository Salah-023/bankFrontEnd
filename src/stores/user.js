import { defineStore } from 'pinia';
import axios from '../axios-auth';
export const userStore = defineStore('userStore', {
    state: () => ({
        jwt: '',
        username: '',
    }),
    getters: {
        isAuthenticated: (state) => state.jwt != '',
        getToken: (state) => state.token
    },
    actions: {
        autologin() {
            if (localStorage["jwt"]) {
                this.jwt = localStorage["jwt"];
            }
        },
        loging(username, password) {
            axios.post("auth/login", {
                username: username,
                password: password
            }).then(response => {
                this.jwt = response.data.token;
                this.username = response.data.email;
            }).catch(error => console.log(error))
        }
    }
});