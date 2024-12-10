<template>
  <div class="home">
    <div class="home-content">
      <h1 class="home-title">Bienvenue sur Gestion Recettes</h1>
      <p class="home-description">
        Gérez vos produits et commandes facilement grâce à notre interface intuitive.
      </p>
      <router-link to="/produits" class="cta-button">Voir les Produits</router-link>
    </div>
    <div class="home-image">
      <img src="/images/acceuil.webp" alt="Illustration accueil" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 3rem;
  background: linear-gradient(135deg, #ffefeb, #ffffff);
  min-height: 100vh;
}

.home-content {
  max-width: 50%;
  text-align: left;
}

.home-title {
  font-size: 3rem;
  color: #ff6f61;
  margin-bottom: 1rem;
  font-weight: bold;
}

.home-description {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-button {
  background-color: #ff6f61;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  background-color: #ff4a3d;
  transform: scale(1.05);
}

.home-image img {
  width: 100%;
  max-width: 700px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .home {
    flex-direction: column;
    text-align: center;
  }

  .home-content {
    max-width: 100%;
  }

  .home-image img {
    max-width: 90%;
    margin-top: 2rem;
  }
}
</style>
