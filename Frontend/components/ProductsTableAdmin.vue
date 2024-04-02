<template>
  <div class="product-table">
    <!-- Nuevo botón para añadir un nuevo producto -->
    <button @click="addNewProduct" class="add-new-product">Añadir nuevo producto</button>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>$Precio</th>
          <th>Imagen</th>
          <th>Descripción</th>
          <th>Acciones</th>
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
          <td>
            <!-- Botón para eliminar el producto -->
            <button class="remove-product" @click="removeProduct(product)">Eliminar producto</button>

            <!-- Botón para registrar venta -->
            <button class="register-sale" @click="registerSale(product)">Registrar venta</button>
          </td>
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
  return import.meta.env.BASE_URL + `assets/images/${imageName}.jpg`;
};

const removeProduct = async (product) => {
  try {
    // Obtener el token de las cookies
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
   

    const response = await fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`, // Agregar el token al encabezado Authorization
      },
    });

    if (!response.ok) {
      throw new Error('Failed to remove product');
    }
    if(response.ok){
    // Actualizar la lista de productos después de eliminar el producto
    const updatedProducts = products.value.filter((p) => p.id !== product.id);
    products.value = updatedProducts;}
  } catch (error) {
    console.error('Error removing product:', error);
  }
};

const registerSale = async (product) => {
  try {
    // Obtener el token de las cookies
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

  

    // Crear el objeto de datos del balance
    const balanceData = {
      product: product.id,
      
    };

    // Enviar la solicitud para crear un nuevo registro en la tabla de balances
    const response = await fetch('http://localhost:3001/balances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify(balanceData)
    });

    if (!response.ok) {
      throw new Error('Failed to register sale');
    }

    alert('Sale registered successfully!');
    // Puedes hacer cualquier otra acción después de registrar la venta si es necesario
  } catch (error) {
    console.error('Error registering sale:', error);
    alert('Error registering sale. Please try again.');
  }
};

const addNewProduct = () => {
  // Implementa la lógica para añadir un nuevo producto
  window.location.href = '/addProductForm';
};
</script>

<style scoped>
.product-table {
  text-align: center;
  padding: 2rem;
  color: black;
  font-family: Arial, sans-serif, fantasy;
  font-size: 1.3rem;
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
  background-size: cover;
}

.remove-product {
  background-color: red;
  padding: 10px;
  font-size: 10px;
  margin-right: 4px;
}

.register-sale {
  background-color: green;
  padding: 10px;
  font-size: 10px;
  margin-right: 4px;
}

.add-new-product {
  background-color: green;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
