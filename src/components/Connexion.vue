<!-- src/views/Connexion.vue -->
<template> 
  <div class="connexion-container">
    <div class="connexion-box">
      <h1>Connexion</h1>
      <form @submit.prevent="loginUser">
        <input v-model="email" type="email" placeholder="Email" required class="form-input" />
        <input v-model="password" type="password" placeholder="Mot de passe" required class="form-input" />
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
import { useUserStore } from '../stores/userStore';
import api from './services/api.js';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const userStore = useUserStore();

async function loginUser() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Veuillez remplir tous les champs.';
    return;
  }
  try {
    const response = await api.post('/utilisateurs/connexion', {
      email: email.value,
      password: password.value,
    });
    userStore.setToken(response.data.token);
    router.push('/produits');
  } catch (error) {
    errorMessage.value = error.response?.data?.error || 'Une erreur est survenue';
  }
}
</script>

<style scoped>
.connexion-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #fafafa;
}

.connexion-box {
  background: #ffffff;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 350px;
  text-align: center;
}

.connexion-box h1 {
  margin-bottom: 20px;
  font-size: 2em;
}

.form-input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn-primary {
  background: #ef9a9a;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
}

.btn-primary:hover {
  background: #e57373;
}

.btn-link {
  color: #ef9a9a;
  text-decoration: none;
  font-weight: bold;
}

.btn-link:hover {
  text-decoration: underline;
}

.error {
  color: red;
  margin-top: 10px;
  font-weight: bold;
}
</style>
