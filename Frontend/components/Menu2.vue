<template>
  <nav class="nav justify-content-center">
    <a class="nav-link active" href="/productsAdmin" aria-current="page">Products</a>
    <a class="nav-link active" href="#" @click="logout">Salir</a>
  </nav>
</template>

<script>
export default {
  methods: {
    deleteCookie(name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
    logout() {
      history.replaceState(null, '', '/login');
      this.deleteCookie('token');
      window.location.replace('/login');
      window.location.href = '/login';
     
      // Otras acciones de cierre de sesión, como redirigir a la página de inicio de sesión, etc.
    }
  }
};
</script>

