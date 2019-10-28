import firebase from "firebase/app";
import "firebase/firestore";

const fireBaseConfig = firebase.initializeApp({
  apikey: "",
  authDomain: "",
  databaseUrl: "",
  projectId: "",
  storageBucket: "",
  messageSenderId: "",
  apiId: ""
});

export { fireBaseConfig as firebase };
