// src/services/commandes.js
import api from './api';

export async function getCommandes() {
  const response = await api.get('/commandes');
  return response.data;
}

export async function deleteCommande(id) { // renommé ici
  const response = await api.delete(`/commandes/${id}`);
  return response.data;
}

export async function addCommande(data) {
  const response = await api.post('/commandes', data);
  return response.data;
}

export async function updateCommande(id, data) {
  const response = await api.put(`/commandes/${id}`, data);
  return response.data;
}
