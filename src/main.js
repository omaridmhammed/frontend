// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/styles.css';

import App from './App.vue';
import router from './router';
import { useAuthStore } from './stores/authStore';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// On retire l'appel à une fonction inexistante
const authStore = useAuthStore();
// authStore.loadTokenFromStorage(); // Supprimé car non défini

app.mount('#app');
