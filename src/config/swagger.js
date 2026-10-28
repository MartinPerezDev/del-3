import swaggerJSDoc from 'swagger-jsdoc';
import { config } from './index.js';

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'ShipNow API',
      version: '1.0.0',
      description: 'Usuarios, tiendas, pedidos y mocks',
    },
    servers: [{ url: `http://localhost:${config.port}` }],
  },
  apis: ['./src/docs/swagger.yaml'],
});

export default swaggerSpec;
