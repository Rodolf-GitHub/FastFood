<template>
    <Menu></Menu>
    <div class="home">
      <h1 class="title">Para realizar el pago por via electronica escanea el codigo</h1>
      <img src="../assets/images/QR.jpg">
      <!-- Add more personal details here -->
    </div>
    <div class="imagediv"></div>  
  </template>
  
  <style scoped>
  .personal-info {
    text-align: center;
    padding: 2rem;
   
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    background-color: rgba(255, 228, 196, 0.2);
   
  }
  
  .title {
    font-size: 4.5rem;
    color: black;
    margin-bottom: 1rem;
    background-color: rgba(255, 228, 196, 0.2);
  }
  
  .info {
    font-size: 4.2rem;
    color: var(--accent-100);
    margin-bottom: 2rem;
    color: black;
    background-color: rgba(255, 228, 196, 0.2);
  }
  
  .label {
    font-weight: bold;
    color: var(--accent-200);
    color: green;
  }
  h1{
    color: black;
    background-color: black;
  }
  .imagediv {
  position: fixed; /* Posición fija */
  bottom: 0; /* Colócalo en la parte inferior */
  right: 0; /* Colócalo en la parte derecha */
  width: 220px; /* Ancho de la imagen */
  height: 100px; /* Altura de la imagen */
  background-image: url("../assets/images/alMedioLogo.jpg");
  background-size: cover;
  margin-bottom: 10px;}
  </style>
  