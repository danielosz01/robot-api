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
          }
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
              startTime: { type: 'string' },
              endTime: { type: 'string' },
              rfResult: { type: 'string' },
              numberRfTests: { type: 'number' },
              rfTestsElapsedTime: { type: 'string' },
              outputPosition: { type: 'string' },
              robotSn: { type: 'string' },
              phoneBotSn: { type: 'string' },
              phoneBotPosition: { type: 'number' },
              swVersion: { type: 'number' },
              ControllerFwVersion: { type: 'number' },
              gripperFwVersion: { type: 'number' },
              mouseKeyboardFwVersion: { type: 'number' },
              cameraReaderFwVersion: { type: 'number' },
              transactionId: { type: 'string' },
              userName: { type: 'string' },
              swError: { type: 'string' },
              rfError: { type: 'string' },
              rfTestsInDetail: { type: 'string' }
            },
            required: ["no", "deviceSn", "imei", "productName", "projectName", "startTime", "endTime", "rfResult", "numberRfTests", "rfTestsElapsedTime", "outputPosition", "robotSn", "phoneBotSn", "phoneBotPosition", "swVersion", "ControllerFwVersion", "gripperFwVersion", "mouseKeyboardFwVersion", "cameraReaderFwVersion", "transactionId", "userName", "swError", "rfError", "rfTestsInDetail"]
          }
        }
      }
    },
    apis: ['./routes/*.js']
  };

const specs = swaggerJsdoc(options);
export default specs;