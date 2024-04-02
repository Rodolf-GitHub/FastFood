<template>
  <div class="home">
    <Menu></Menu>
    <h1 class="title">Bienvenido al restaurante Al Medio</h1>
    <p class="description">
      Descubre una experiencia gastronómica única en el corazón de la ciudad.
      Deléitate con nuestra exquisita cocina tradicional cubana, preparada con
      los ingredientes más frescos y sabores auténticos. ¡Ven a disfrutar de una
      mezcla perfecta entre tradición y modernidad en cada bocado! ¡Te esperamos
      para vivir momentos inolvidables en nuestro restaurante!
    </p>
    <!-- Add more elements here, such as images or buttons -->
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
  background-image: url("../assets/images/alMedioLogo.png");
  background-size: cover; /* Ajusta la imagen para que cubra toda la pantalla */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen vertical y horizontalmente */
  height: 620px;
}

.title {
  text-align: left;
  font-size: 4.5rem;
  color: var(--primary-200); /* Use your custom accent color */
  margin-bottom: 2rem;
  background-color: rgba(10, 10, 10, 0.5);
}

.description {
  font-size: 2.1rem;
  color: var(--accent-100); /* Use your custom text color */
  margin-bottom: 2rem;
  color: rgb(242, 242, 243);
  background-color: rgba(10, 10, 10, 0.5);
}

body {
  background-image: url("../assets/images/krustykrab.jpg");
  background-size: cover;
}
p{
  margin-right: 200px;
  margin-bottom: 300px;
}
</style>
