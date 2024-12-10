<!-- src/views/Register.vue -->
<template>
  <div class="register-container">
    <div class="register-box">
      <h1>Inscription</h1>
      <form @submit.prevent="registerUser">
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
        <button type="submit" class="btn btn-primary">S'inscrire</button>
      </form>
      <p>
        Déjà un compte ?
        <router-link to="/login" class="btn-link">Connectez-vous</router-link>.
      </p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import api from '@/components/services/api';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

async function registerUser() {
  if (!username.value || !password.value) {
    errorMessage.value = 'Veuillez remplir tous les champs.';
    return;
  }
  try {
    await api.post('/utilisateurs/inscription', {
      username: username.value,
      password: password.value,
    });
    router.push('/login');
  } catch (error) {
    errorMessage.value = error.response?.data?.error || 'Une erreur est survenue';
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #fafafa;
}

.register-box {
  background: #ffffff;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 350px;
  text-align: center;
}

.register-box h1 {
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
