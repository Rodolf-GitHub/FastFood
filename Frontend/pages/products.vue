<template>
    <Menu></Menu>
    <div class="home">
    <ProductsTable></ProductsTable>
</div>
<div class="imagediv"></div>  
</template>
<style scoped>
.home {
    text-align: center;
    padding: 2rem;
   background-color: var(--bg-300);
    background-size: cover; /* Ajusta la imagen para que cubra toda la pantalla */
    background-repeat: no-repeat; /* Evita que la imagen se repita */
    background-position: center; /* Centra la imagen vertical y horizontalmente */
    height: 600px;
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