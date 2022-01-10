import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseInItializetion = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInItializetion;