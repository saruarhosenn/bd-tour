import { initializeApp } from "@firebase/app";
import firebaseConfig from "./Firebase.Config";

const FirebaseInit = () => {
	initializeApp(firebaseConfig);
};

export default FirebaseInit;