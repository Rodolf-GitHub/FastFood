
const SwaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API del Restaurant',
        version: '1.0.0',
        description: 'Documentación de la API del Restaurant',
      },
      servers: [
        {
          url: 'http://localhost:'+process.env.PORT+'/api',
          description: 'Servidor local',
        },
      ],
    },
    
    apis: ['./swaggerDocs/*'], // Rutas a los archivos que contienen las definiciones de las rutas de la API
  };
  
  module.exports = SwaggerOptions;
  