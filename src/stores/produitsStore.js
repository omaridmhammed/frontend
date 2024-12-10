// src/stores/produitsStore.js

import { defineStore } from 'pinia';
import { getProduits, addProduit, updateProduit, deleteProduit } from '../components/services/produits';

export const useProduitsStore = defineStore('produits', {
  state: () => ({
    produits: [], // Stocke la liste des produits
  }),
  actions: {
    // Action pour récupérer tous les produits
    async fetchProduits() {
      try {
        const produits = await getProduits();
        this.produits = produits;
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    },

    // Action pour créer un nouveau produit
    async createProduit(produit) {
      try {
        const newProduit = await addProduit(produit);
        this.produits.push(newProduit);
      } catch (error) {
        console.error('Erreur lors de la création du produit :', error);
      }
    },

    // Action pour mettre à jour un produit existant
    async editProduit(id, updatedData) {
      try {
        await updateProduit(id, updatedData);
        this.produits = this.produits.map((produit) =>
          produit.id === id ? { ...produit, ...updatedData } : produit
        );
      } catch (error) {
        console.error('Erreur lors de la mise à jour du produit :', error);
      }
    },

    // Action pour supprimer un produit
    async removeProduit(id) {
      try {
        await deleteProduit(id);
        this.produits = this.produits.filter((produit) => produit.id !== id);
      } catch (error) {
        console.error('Erreur lors de la suppression du produit :', error);
      }
    },
  },
});
