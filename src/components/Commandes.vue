<!-- src/components/Commandes.vue -->
<template>
  <div class="commandes-container">
    <h1>Vos Commandes</h1>
    <p v-if="loading" class="loading-message">Chargement des commandes...</p>

    <ul v-if="!loading && commandes.length > 0">
      <li v-for="commande in commandes" :key="commande.id">
        <div class="commande-card">
          <p class="description">{{ commande.description }}</p>
          <span class="status" :class="getStatusClass(commande.status)">
            {{ commande.status }}
          </span>
          <button class="btn-danger" @click="cancel(commande.id)">Annuler</button>
        </div>
      </li>
    </ul>

    <p v-if="!loading && commandes.length === 0" class="no-commandes">
      Vous n'avez aucune commande pour le moment.
    </p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useCommandesStore } from '../stores/commandesStore';

const commandesStore = useCommandesStore();

const commandes = computed(() => commandesStore.commandes);
const loading = computed(() => commandesStore.loading);

onMounted(() => {
  commandesStore.fetchCommandes();
});

function getStatusClass(status) {
  return {
    en_attente: 'status-pending',
    confirme: 'status-confirmed',
    annule: 'status-canceled',
  }[status] || 'status-default';
}

async function cancel(id) {
  await commandesStore.annulerCommande(id);
  alert('Commande annulée !');
}
</script>

<style scoped>
/* Styles CSS inchangés */
</style>
