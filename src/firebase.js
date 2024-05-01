
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDihul9ZqmCFGiCyqFz6kYh6kMhXShRn_o",
  authDomain: "netflix-clone-3b0cc.firebaseapp.com",
  projectId: "netflix-clone-3b0cc",
  storageBucket: "netflix-clone-3b0cc.appspot.com",
  messagingSenderId: "966233571050",
  appId: "1:966233571050:web:9cc7f93471f8845902a193",
  measurementId: "G-F08S21VX07"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,

       });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, login, signup, logout}