import mongoose from "mongoose";

const PassFailSchema = new mongoose.Schema(
  {
    no: {
      type: Number,
      required: true,
    },
    deviceSn: {
      type: String,
      required: true,
    },
    imei : {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    rfResult: {
      type: String,
      required: true,
    },
    devicePlacedAt: {
      type: String,
      required: true,
    },
    rfStartTime: {
      type: String,
      required: true,
    },
    rfEndTime: {
      type: String,
      required: true,
    },
    devicePicketAt: {
      type: String,
      required: true,
    },
    processTime: {
      type: String,
      required: true,
    },
    waitingTime: {
      type: String,
      required: true,
    },
    shieldBox: {
      type: Number,
      required: true,
    },
    outputPosition: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    rfswVersion: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    swError: {
      type: String,
      required: true,
    },
    rfError: {
      type: String,
      required: true,
    },
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

export default mongoose.model("PassFail", PassFailSchema);