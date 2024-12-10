<!-- src/views/Login.vue -->
<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Connexion</h1>
      <form @submit.prevent="loginUser">
        <input
          type="text"
          v-model="username"
          placeholder="Nom d'utilisateur"
          required
          class="form-input"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Mot de passe"
          required
          class="form-input"
        />
        <button type="submit" class="btn btn-primary">Se connecter</button>
      </form>
      <p>
        Pas encore de compte ?
        <router-link to="/register" class="btn-link">Inscrivez-vous</router-link>.
      </p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import api from '@/components/services/api';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const authStore = useAuthStore();

async function loginUser() {
  if (!username.value || !password.value) {
    errorMessage.value = 'Veuillez remplir tous les champs';
    return;
  }

  try {
    const response = await api.post('/utilisateurs/connexion', {
      email: username.value,
      password: password.value,
    });
    authStore.login(response.data.token, response.data.user);
    router.push('/');
  } catch (error) {
    errorMessage.value = error.response?.data?.error || 'Une erreur est survenue';
  }
}
</script>

<style scoped>
/* styles inchangés */
</style>
