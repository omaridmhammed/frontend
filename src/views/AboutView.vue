<!-- src/views/AboutView.vue -->
<template>
  <div class="about-container">
    <h1>À propos de nous</h1>
    <p>
      Cette application vous aide à gérer vos recettes efficacement. Nous fournissons des outils pour gérer vos produits et commandes de manière intuitive.
    </p>
    <img src="/images/about--us.webp" alt="Illustration à propos" class="about-image" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-container {
  text-align: center;
  padding: 2rem;
}

.about-image {
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
  border-radius: 10px;
}
</style>
