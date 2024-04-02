<template>
    <Menu></Menu>
    <div class="account-balance">
      <h1 class="title">Horarios de hoy</h1>
      <p class="balance-info">
        estamos abiertos de :
        <span class="balance-amount">8am a 1am</span>
      </p>
      <!-- Add more account-related elements here -->
    </div>
    <div class="imagediv"></div>  
  </template>
  
  <style scoped>
  .account-balance {
    text-align: center;
    padding: 2rem;
   background-color: var(--bg-300);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
   
  }
  
  .title {
    font-size: 2.5rem;
    color: var(--primary-200);
    margin-bottom: 1rem;
    color: black;
    background-color:  rgba(255, 228, 196, 0.5);
  }
  
  .balance-info {
    font-size: 1.2rem;
    color: var(--accent-100);
    margin-bottom: 2rem;
    font-size: 50px;
    color: black;
    background-color: rgba(255, 228, 196, 0.5);
    
  }
  
  .balance-amount {
    font-weight: bold;
    color: var(--accent-200);
    color: green;
  }
  .imagediv {
  position: fixed; /* Posición fija */
  bottom: 0; /* Colócalo en la parte inferior */
  right: 0; /* Colócalo en la parte derecha */
  width: 220px; /* Ancho de la imagen */
  height: 100px; /* Altura de la imagen */
  background-image: url("../assets/images/alMedioLogo.jpg");
  background-size: cover;
  margin-bottom: 10px;
}
  </style>
  