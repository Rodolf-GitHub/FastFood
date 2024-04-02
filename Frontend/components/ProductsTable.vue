<template>
  <div class="product-table">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>$Precio</th>
          <th>Imagen</th>
          <th>Descripcion</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <img :src="getImageUrl(product.image)" alt="Product Image" />
          </td>
          <td>{{ product.description }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3001/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

const getImageUrl = (imageName) => {
  // Assuming your images are located in the 'assets/images' directory
  return import.meta.env.BASE_URL + `assets/images/${imageName}.jpg`;
};

const addToCart = (product) => {
  // Implement your addToCart logic here
};

const removeFromCart = (product) => {
  // Implement your removeFromCart logic here
};
</script>

<style scoped>
.product-table {
  text-align: center;
  padding: 2rem;
  color: black;
  font-family: Arial, sans-serif, fantasy; /* Cambia el tipo de letra */
  font-size: 1.3rem; /* Aumenta el tamaño del texto */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  border: 1px solid var(--bg-200);
  background-color: rgba(255, 228, 196, 0.3);
}

th {
  background-color: var(--bg-300);
  font-weight: bold;
}

img {
  width: 100px;
  height: 100px;
  background-size: cover; /* Ajusta la imagen para que cubra toda la pantalla */
}
.add {
  background-color: green;
  font-size: 10px;
  padding: 10px;
  margin-right: 4px;
}
.remove {
  background-color: red;
  padding: 10px;
  font-size: 10px;
  margin-right: 4px;
}
</style>
