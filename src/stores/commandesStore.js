// src/stores/commandesStore.js

import { defineStore } from 'pinia';
import { getCommandes, addCommande, updateCommande, deleteCommande } from '../components/services/commandes';

export const useCommandesStore = defineStore('commandes', {
  state: () => ({
    commandes: [], // Liste des commandes
  }),
  actions: {
    // Action pour récupérer toutes les commandes
    async fetchCommandes() {
      try {
        const commandes = await getCommandes();
        this.commandes = commandes;
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes :', error);
      }
    },

    // Action pour créer une nouvelle commande
    async createCommande(commande) {
      try {
        const newCommande = await addCommande(commande);
        this.commandes.push(newCommande);
      } catch (error) {
        console.error('Erreur lors de la création de la commande :', error);
      }
    },

    // Action pour mettre à jour une commande existante
    async editCommande(id, updatedData) {
      try {
        await updateCommande(id, updatedData);
        this.commandes = this.commandes.map((commande) =>
          commande.id === id ? { ...commande, ...updatedData } : commande
        );
      } catch (error) {
        console.error('Erreur lors de la mise à jour de la commande :', error);
      }
    },

    // Action pour supprimer une commande
    async removeCommande(id) {
      try {
        await deleteCommande(id);
        this.commandes = this.commandes.filter((commande) => commande.id !== id);
      } catch (error) {
        console.error('Erreur lors de la suppression de la commande :', error);
      }
    },
  },
});
