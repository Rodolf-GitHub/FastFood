<template>
    <Menu2></Menu2>
    <div class="home">
    <ProductsTableAdmin></ProductsTableAdmin>
    <div class="imagediv"></div>
</div>
    
</template>
<style scoped>
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