<template>
    <div class="home">
      <Menu2></Menu2>
      <h1 class="title">Welcome to the Krusty Krab!</h1>
      <p class="description">
        At our restaurant, we offer a delightful variety of seafood dishes, including succulent crab cakes, crispy calamari, and shrimp scampi. Our fresh catch and authentic flavors will transport you to the heart of Bikini Bottom. Come and enjoy an underwater culinary experience like no other!
      </p>
      <!-- Add more elements here, such as images or buttons -->
      <a href="/login">Login</a>
    </div>
  </template>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 2rem;
    background-image: url("../assets/images/krus.jpg");
    background-size: cover; /* Ajusta la imagen para que cubra toda la pantalla */
    background-repeat: no-repeat; /* Evita que la imagen se repita */
    background-position: center; /* Centra la imagen vertical y horizontalmente */
    height: 600px;
  }
  
  .title {
    font-size: 4.5rem;
    color: var(--primary-200); /* Use your custom accent color */
    margin-bottom: 1rem;
  }
  
  .description {
    font-size: 2.2rem;
    color: var(--accent-100); /* Use your custom text color */
    margin-bottom: 2rem;
    color:rgb(12, 4, 128);
    background-color: rgba(247, 249, 250, 0.5);
  }
  
  body {
    background-image: url("../assets/images/krustykrab.jpg");
    background-size: cover;
  }
  a{
    background-color: rgb(199, 116, 21);
    font-size: 70px;
    border-radius: 20px;
  }
  </style>
  