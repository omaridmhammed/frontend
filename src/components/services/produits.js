export async function getProduits() {
  return [
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 20 },
  ];
}

export async function addProduit(produit) {
  return { id: Date.now(), ...produit };
}

export async function updateProduit(id, updatedData) {
  return { id, ...updatedData };
}

export async function deleteProduit(id) {
  return true;
}
