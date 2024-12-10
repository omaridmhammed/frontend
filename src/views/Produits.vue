<!-- src/views/Produits.vue -->
<template>
  <div class="produits-container">
    <h1>Liste des Produits</h1>
    <p v-if="loading">Chargement des produits...</p>

    <div class="produits-grid" v-if="!loading">
      <div class="produit-card" v-for="produit in produits" :key="produit.id">
        <img :src="produit.image" alt="Produit" class="produit-image" />
        <h2>{{ produit.nom }}</h2>
        <p>Prix : {{ produit.prix }} CAD</p>
        <button class="btn" @click="addToCart(produit)">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useProduitsStore } from '../stores/produitsStore';

const produitsStore = useProduitsStore();

const produits = computed(() => produitsStore.produits);
const loading = computed(() => produitsStore.loading);

onMounted(() => {
  produitsStore.fetchProduits();
});

function addToCart(produit) {
  alert(`Produit ${produit.nom} ajouté au panier (fonctionnalité à implémenter)`);
}
</script>

<style scoped src="../assets/produits.css"></style>
