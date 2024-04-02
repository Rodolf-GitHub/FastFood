<template>
    <div class="div1">
      <h1>Add Product</h1>
  
      <form @submit.prevent="addProduct">
        <label for="productName">Name:</label>
        <input type="text" id="productName" v-model="productName" required><br>
  
        <label for="productPrice">Price:</label>
        <input type="number" id="productPrice" v-model.number="productPrice" min="0" step="0.01" required><br>
  
        <label for="productDescription">Description:</label>
        <textarea id="productDescription" v-model="productDescription"></textarea><br>

        <label for="productImage">Image:</label>
        <input type="text" id="productImage" v-model="productImage" required><br>
  
        <button type="submit">OK</button> <!-- Añadido el botón aquí -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productName: '',
        productPrice: 0,
        productDescription: '',
        productImage: ''
      };
    },
    methods: {
      async addProduct() {
        const productData = {
          name: this.productName,
          price: this.productPrice,
          description: this.productDescription,
          image: this.productImage
        };
  
        try {
            const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
          const response = await fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`, // Agregar el token al encabezado Authorization
            },
            body: JSON.stringify(productData)
          });
  
          if (!response.ok) {
            throw new Error('Failed to add product');
          }
  
          alert('Product added successfully!');
          window.location.href = '/productsAdmin';
          // Puedes redirigir a otra página o hacer cualquier otra acción después de añadir el producto
        } catch (error) {
          console.error('Error adding product:', error);
          alert('Error adding product. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  form {
    max-width: 400px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #fff;
  }
  
  input[type="text"],
  input[type="number"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  .div1{
    background-image: url("../assets/images/alMedioLogo.png");
    
  }
  body{
    background-color:var(--bg-300) ;
  }
  </style>
  