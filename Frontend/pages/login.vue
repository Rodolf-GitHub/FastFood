<script setup lang="ts">
  import { object, string, type InferType } from 'yup'
  import type { FormSubmitEvent } from '#ui/types'
  import { reactive, ref } from 'vue';

  const schema = object({
    username: string().required('Required'),
    password: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required')
  })

  type Schema = InferType<typeof schema>

  const state = reactive({
    username: '',
    password: ''
  })

  const errorEnCredenciales = ref(false); // Declaración explícita de la variable errorEnCredenciales

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    errorEnCredenciales.value = false; // Restablecer el valor de errorEnCredenciales a false al enviar el formulario
    const userData = {
      username: state.username,
      password: state.password
    };
         console.log(userData)
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        // Procesar la respuesta del backend
        const data = await response.json();
        console.log('Respuesta del backend:', data);
        // Aquí puedes realizar acciones adicionales según la respuesta del backend
        // Guardar el token en las cookies del navegador
        
        document.cookie = `token=${data.token}; path=/`; // Ajusta la ruta si es necesario
        window.location.href = '/productsAdmin'; // Ajusta la ruta de la página de inicio si es necesario
        
      } else {
        console.error('Error(1)  en la solicitud:', response.status);
        alert('credenciales incorrectas')
        
        // Aquí puedes manejar errores específicos de la solicitud
        errorEnCredenciales.value = true; // Establecer errorEnCredenciales a true si las credenciales son incorrectas
        setTimeout(() => {
          errorEnCredenciales.value = false;
        }, 3000);
      }
    } catch (error) {
      console.error('Error(2) en la solicitud:', error);
      // Manejar errores de red u otros errores de JavaScript
    }
  }
</script>

<!-- Tu plantilla y estilos permanecen sin cambios -->


<!-- Tu plantilla y estilos permanecen sin cambios -->


<template>
  <div class="home">
    <Menu></Menu>
      <h1>Pagina de administracion del restaurant. Entre la contrasena. (si no es administrador retroceda a bienvenida)</h1>
      <UForm :schema="schema" :state="state" class="space-y-4 " @submit="onSubmit">
        <UFormGroup label="Username" name="username" class="campInfo">
          <UInput v-model="state.username" type="text" />
        </UFormGroup>
        <UFormGroup label="Password" name="password" class="campInfo">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>
        <UButton type="submit">Submit</UButton>
      </UForm>
      <footer>
        <a class="nav-link active" href="/home" aria-current="page">Bienvenida</a>
      </footer>
      <div class="imagediv"></div>
  </div>
  
</template>

<style scoped>
  body {
    text-align: center;
    padding: 2rem;
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    background-color: rgba(255, 228, 196, 0.2);
    position: relative; /* Hace que el contenedor sea relativo para que el mensaje de error sea absoluto */
  }


  .campInfo {
    color: aliceblue;
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
