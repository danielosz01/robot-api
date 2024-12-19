import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Robotic Arm Api',
        version: '1.0.0',
        description: 'RF Pass and Fails',
        contact: {
          name: 'Daniel Ostos',
          phone: '9406293803',
          email: 'daniel.benedeck@cynergyus.com'
        },
        servers: [
          {
            url: 'http://localhost:5100',
            description: 'Local server'
          },
          {
            url: 'https://robot-api-lhkq.onrender.com',
            description: 'Production Server'
          },
        ]
      },
      components: {
        schemas: {
          PassFail: {
            type: 'object',
            properties: {
              no: { type: 'number' },
              deviceSn: { type: 'string' },
              imei: { type: 'number' },
              productName: { type: 'string' },
              projectName: { type: 'string' },
              rfResult: { type: 'string' },
              devicePlacedAt: { type: 'string' },
              rfStartTime: { type: 'string' },
              rfEndTime: { type: 'string' },
              devicePicketAt: { type: 'string' },
              processTime: { type: 'string' },
              waitingTime: { type: 'string' },
              shieldBox: { type: 'number' },
              outputPosition: { type: 'string' },
              transactionId: { type: 'string' },
              rfswVersion: { type: 'number' },
              userName: { type: 'string' },
              swError: { type: 'string' },
              rfError: { type: 'string' }
            },
            required: ["no", "deviceSn", "imei", "productName", "projectName", "rfResult", "devicePlacedAt", "rfStartTime", "rfEndTime", "devicePicketAt",
              "processTime", "waitingTime", "shieldBox", "outputPosition", "transactionId", "rfswVersion", "userName", "swError", "rfError"]
          }
        }
      }
    },
    apis: ['./routes/*.js']
  };

const specs = swaggerJsdoc(options);
export default specs;