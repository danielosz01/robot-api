import mongoose from "mongoose";

const OqcSchema = new mongoose.Schema(
  {
    no: {
      type: Number,
      required: true,
    },
    deviceSn: {
      type: String,
      required: true,
    },
    imei: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    modelNumber: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    machineSn: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    elapsedTime: {
      type: String,
      required: true,
    },
    processStatus: {
      type: String,
      required: true,
    },
    phoneStatus: {
      type: String,
      required: true,
    },
    erasureStatus: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
      required: true,
    },
    failureCode: {
      type: String,
      required: true,
    },
    resetReason: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
      required: true,
    },
    os: {
      type: String,
      required: true,
    },
    carrier: {
      type: String,
      required: true,
    },
    carrierLock: {
      type: String,
      required: true,
    },
    fmifrpStatus: {
      type: String,
      required: true,
    },
    fmifrpMethod: {
      type: String,
      required: true,
    },
    simStatus: {
      type: String,
      required: true,
    },
    passCode: {
      type: String,
      required: true,
    },
    accelerometer: {
      type: String,
      required: true,
    },
    actionButton: {
      type: String,
      required: true,
    },
    activeEdge: {
      type: String,
      required: true,
    },
    arCamera: {
      type: String,
      required: true,
    },
    audioJackCosmetic: {
      type: String,
      required: true,
    },
    backGlassDefect: {
      type: String,
      required: true,
    },
    backLight: {
      type: String,
      required: true,
    },
    barometer: {
      type: String,
      required: true,
    },
    batteryDrain: {
      type: String,
      required: true,
    },
    bluetooth: {
      type: String,
      required: true,
    },
    cameraDefect: {
      type: String,
      required: true,
    },
    cameraFlash: {
      type: String,
      required: true,
    },
    displayDefect: {
      type: String,
      required: true,
    },
    eSim: {
      type: String,
      required: true,
    },
    faceAuth: {
      type: String,
      required: true,
    },
    fileTransfer: {
      type: String,
      required: true,
    },
    fingerPrint: {
      type: String,
      required: true,
    },
    frontCamera: {
      type: String,
      required: true,
    },
    gps: {
      type: String,
      required: true,
    },
    gyroscope: {
      type: String,
      required: true,
    },
    headset: {
      type: String,
      required: true,
    },
    irCamera: {
      type: String,
      required: true,
    },
    lcd: {
      type: String,
      required: true,
    },
    lightSensor: {
      type: String,
      required: true,
    },
    magnometer: {
      type: String,
      required: true,
    },
    microphone1: {
      type: String,
      required: true,
    },
    microphone2: {
      type: String,
      required: true,
    },
    nfcTag: {
      type: String,
      required: true,
    },
    offModeCharging: {
      type: String,
      required: true,
    },
    otg: {
      type: String,
      required: true,
    },
    otherDeffects: {
      type: String,
      required: true,
    },
    physicalDamage: {
      type: String,
      required: true,
    },
    powerButton: {
      type: String,
      required: true,
    },
    proximitySensor: {
      type: String,
      required: true,
    },
    quickCharge: {
      type: String,
      required: true,
    },
    rearCamera: {
      type: String,
      required: true,
    },
    softwareDefects: {
      type: String,
      required: true,
    },
    speaker: {
      type: String,
      required: true,
    },
    switchBetweenCameras: {
      type: String,
      required: true,
    },
    topMicrophone: {
      type: String,
      required: true,
    },
    topSpeaker: {
      type: String,
      required: true,
    },
    touchPanel: {
      type: String,
      required: true,
    },
    usbCosmetic: {
      type: String,
      required: true,
    },
    vibration: {
      type: String,
      required: true,
    },
    volumeDown: {
      type: String,
      required: true,
    },
    volumeUp: {
      type: String,
      required: true,
    },
    wifi: {
      type: String,
      required: true,
    },
    wiredCharging: {
      type: String,
      required: true,
    },
    wirelessCharging: {
      type: String,
      required: true,
    },
    profileName: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    chargeCurrent: {
      type: String,
      required: true,
    },
    pbSwVersion: {
      type: String,
      required: true,
    },
    fwVersion: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);  


/*
  {
    "no": 206,
    "deviceSn": "45141FDH3S1A0Q",
    "imei": 358039170316729,
    "productName": "Google Pixel 7 Pro",
    "projectName": "Google T-Mobile C10",
    "startTime": "16 Oct 2024 07:03:10",
    "endTime": "16 Oct 2024 07:31:32",
    "rfResult": "PASSED",
    "numberRfTests": 1,
    "rfTestsElapsedTime": 00:05:06,
    "outputPosition": "Cart 1, Tray 3, Port 1",
    "robotSn": "A85E45320F53",
    "phoneBotSn": "E0D55EB75B85",
    "phoneBotPosition": 2,
    "swVersion": 1.73,
    "ControllerFwVersion": 2.5,
    "gripperFwVersion": 4.3,
    "mouseKeyboardFwVersion": 1.01,
    "cameraReaderFwVersion": 1.03,
    "transactionId": "01AAAUVE",
    "userName": "hailu5g",
    "swError": "No",
    "rfError": "No",
    "rfTestsInDetail": "{positionOfSB1:1,positionOfSB2:0,positionOfSB3:0}"
  },
  */

export default mongoose.model("Oqc", OqcSchema);