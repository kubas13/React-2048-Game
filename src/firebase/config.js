import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAwC_ZDYyIzWew_V6-o_FJPvjHxZf_GGYc",
    authDomain: "game-2048-project.firebaseapp.com",
    projectId: "game-2048-project",
    storageBucket: "game-2048-project.appspot.com",
    messagingSenderId: "509773358234",
    appId: "1:509773358234:web:128211672798781593ab23"
};




const app = initializeApp(firebaseConfig);



const storage = getStorage();

const auth = getAuth();

const db = getFirestore();

export { db, auth, storage };












