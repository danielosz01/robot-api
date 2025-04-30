import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Robotic Arm Api',
        version: '1.0.0',
        description: 'RF Pass and Fails & OQC Test Results',
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
          },
          Oqc: {
            type: 'object',
            properties: {
              no:              { type: 'number' },
              deviceSn:        { type: 'string' },
              imei:            { type: 'number' },
              productName:     { type: 'string' },
              modelNumber:     { type: 'string' },
              color:           { type: 'string' },
              userId:          { type: 'string' },
              machineSn:       { type: 'string' },
              position:        { type: 'number' },
              startTime:       { type: 'string' },
              endTime:         { type: 'string' },
              elapsedTime:     { type: 'string' },
              processStatus:   { type: 'string' },
              phoneStatus:     { type: 'string' },
              erasureStatus:   { type: 'string' },
              certificate:     { type: 'string' },
              failureCode:     { type: 'string' },
              resetReason:     { type: 'string' },
              capacity:        { type: 'string' },
              os:              { type: 'string' },
              carrier:         { type: 'string' },
              carrierLock:     { type: 'string' },
              fmifrpStatus:    { type: 'string' },
              fmifrpMethod:    { type: 'string' },
              simStatus:       { type: 'string' },
              passCode:        { type: 'string' },
              accelerometer:   { type: 'string' },
              actionButton:    { type: 'string' },
              activeEdge:      { type: 'string' },
              arCamera:        { type: 'string' },
              audioJackCosmetic:{ type: 'string' },
              backGlassDefect: { type: 'string' },
              backLight:       { type: 'string' },
              barometer:       { type: 'string' },
              batteryDrain:    { type: 'string' },
              bluetooth:       { type: 'string' },
              cameraDefect:    { type: 'string' },
              cameraFlash:     { type: 'string' },
              displayDefect:   { type: 'string' },
              eSim:            { type: 'string' },
              faceAuth:        { type: 'string' },
              fileTransfer:    { type: 'string' },
              fingerPrint:     { type: 'string' },
              frontCamera:     { type: 'string' },
              gps:             { type: 'string' },
              gyroscope:       { type: 'string' },
              headset:         { type: 'string' },
              irCamera:        { type: 'string' },
              lcd:             { type: 'string' },
              lightSensor:     { type: 'string' },
              magnometer:      { type: 'string' },
              microphone1:     { type: 'string' },
              microphone2:     { type: 'string' },
              nfcTag:          { type: 'string' },
              offModeCharging: { type: 'string' },
              otg:             { type: 'string' },
              otherDeffects:   { type: 'string' },
              physicalDamage:  { type: 'string' },
              powerButton:     { type: 'string' },
              proximitySensor: { type: 'string' },
              quickCharge:     { type: 'string' },
              rearCamera:      { type: 'string' },
              softwareDefects: { type: 'string' },
              speaker:         { type: 'string' },
              switchBetweenCameras:{ type: 'string' },
              topMicrophone:   { type: 'string' },
              topSpeaker:      { type: 'string' },
              touchPanel:      { type: 'string' },
              usbCosmetic:     { type: 'string' },
              vibration:       { type: 'string' },
              volumeDown:      { type: 'string' },
              volumeUp:        { type: 'string' },
              wifi:            { type: 'string' },
              wiredCharging:   { type: 'string' },
              wirelessCharging:{ type: 'string' },
              profileName:     { type: 'string' },
              transactionId:   { type: 'string' },
              chargeCurrent:   { type: 'string' },
              pbSwVersion:     { type: 'string' },
              fwVersion:       { type: 'string' }
            },
            required: [
              "no","deviceSn","imei","productName","modelNumber","color","userId","machineSn",
              "position","startTime","endTime","elapsedTime","processStatus","phoneStatus",
              "erasureStatus","certificate","failureCode","resetReason","capacity","os","carrier",
              "carrierLock","fmifrpStatus","fmifrpMethod","simStatus","passCode","accelerometer",
              "actionButton","activeEdge","arCamera","audioJackCosmetic","backGlassDefect","backLight",
              "barometer","batteryDrain","bluetooth","cameraDefect","cameraFlash","displayDefect","eSim",
              "faceAuth","fileTransfer","fingerPrint","frontCamera","gps","gyroscope","headset","irCamera",
              "lcd","lightSensor","magnometer","microphone1","microphone2","nfcTag","offModeCharging",
              "otg","otherDeffects","physicalDamage","powerButton","proximitySensor","quickCharge",
              "rearCamera","softwareDefects","speaker","switchBetweenCameras","topMicrophone","topSpeaker",
              "touchPanel","usbCosmetic","vibration","volumeDown","volumeUp","wifi","wiredCharging",
              "wirelessCharging","profileName","transactionId","chargeCurrent","pbSwVersion","fwVersion"
            ]
          }          
        }
      }
    },
    apis: ['./routes/*.js']
  };

const specs = swaggerJsdoc(options);
export default specs;