<!-- src/App.vue -->
<template>
  <div class="app-layout">
    <header class="navbar">
      <img src="/images/logo.png" alt="Logo" class="navbar-logo" />
      <nav class="navbar-links">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link v-if="isAuthenticated" to="/produits" class="nav-link">Produits</router-link>
        <router-link v-if="isAuthenticated" to="/commandes" class="nav-link">Commandes</router-link>
        <router-link to="/about" class="nav-link">À propos</router-link>
      </nav>
      <div class="auth-buttons">
        <router-link v-if="!isAuthenticated" to="/login">
          <button class="btn btn-secondary">Connexion</button>
        </router-link>
        <router-link v-if="!isAuthenticated" to="/register">
          <button class="btn btn-primary">Inscription</button>
        </router-link>
        <button v-if="isAuthenticated" @click="logout" class="btn btn-primary">Déconnexion</button>
      </div>
    </header>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>© 2024 Gestion Recettes. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from './stores/authStore';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();
const isAuthenticated = computed(() => auth.isAuthenticated);

function logout() {
  auth.logout();
  router.push('/login');
}
</script>

<style>
@import 'assets/main.css';
/* Vos styles inchangés */
</style>
