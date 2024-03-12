<template>
  <div class="product-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cost $</th>
          <th>Image</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td><img :src="'../assets/images/' + product.image" alt="Producto">
</td>
          <td>{{ product.description }}</td>
          <td>
            <button class="add" @click="addToCart(product)">addToCart</button>
            <button class="remove" @click="removeFromCart(product)">removeFromCart</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
      {
        id: 1,
        name: 'KrabBurguer',
        price: 5.99,
        image: "hamburguesa.jpg",
        description: 'Delicious Hamburguer of Krab meat',
      },
      {
        id: 2,
        name: 'Papas fritas',
        price: 2.49,
        image: "papas.jpg",
        description: 'Crujientes papas fritas con sal',
      },
      // Add more products here
    ],
    };
  },
  methods: {
    addToCart(product) {
      // Lógica para añadir al carrito
      console.log(`Añadido al carrito: ${product.name}`);
    },
    removeFromCart(product) {
      // Lógica para retirar del carrito
      console.log(`Retirado del carrito: ${product.name}`);
    },
  },
};
</script>

<style scoped>
.product-table {
  text-align: center;
  padding: 2rem;
  color: black;
  font-family: Arial, sans-serif,fantasy; /* Cambia el tipo de letra */
  font-size: 1.3rem; /* Aumenta el tamaño del texto */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.5rem;
  border: 1px solid var(--bg-200);
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
.add{
  background-color: green;
  font-size: 20px;
  padding: 10px;
  margin-right: 4px;
}
.remove{
  background-color:red;
  padding: 10px;
  font-size: 20px;
  margin-right: 4px;
}
</style>
