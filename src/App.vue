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
import { computed, onMounted } from 'vue';
import { useAuthStore } from './stores/authStore';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();
const isAuthenticated = computed(() => auth.isAuthenticated);

function logout() {
  auth.logout();
  router.push('/login');
}

onMounted(() => {
  console.log('Application Vue.js montée avec succès');
});
</script>

<style scoped>
@import 'assets/main.css';

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #4CAF50;
  color: white;
}

.navbar-logo {
  height: 50px;
}

.navbar-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}

.auth-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #4CAF50;
  color: white;
}

.btn-secondary {
  background-color: #2196F3;
  color: white;
}

.btn:hover {
  opacity: 0.9;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.footer {
  text-align: center;
  padding: 1rem;
  background-color: #f1f1f1;
}
</style>
