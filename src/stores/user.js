// src/stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null, // Token d'authentification
    user: null,  // Informations sur l'utilisateur
  }),
  actions: {
    login(token, user) {
      this.token = token;
      this.user = user;
      localStorage.setItem('token', token); // Stocker le token dans le localStorage
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token'); // Supprimer le token du localStorage
    },
    loadTokenFromStorage() {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        this.token = storedToken;
      }
    },
  },
});
