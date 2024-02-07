// import './assets/main.css'
// import router from './router'
// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import store from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",
  authDomain: "recipe-page-a168a.firebaseapp.com",
  projectId: "recipe-page-a168a",
  storageBucket: "recipe-page-a168a.appspot.com",
  messagingSenderId: "540105599417",
  appId: "1:540105599417:web:68b26438060496e3412e68",
  measurementId: "G-G49BH7ELT1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const app = createApp(App)

// app.use(router)
// recipe-page-a168a.firebaseapp.com
// recipe-page-eosin.vercel.app
// app.mount('#app')

//begin

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// // 2

// // import { addDoc, collection } from "firebase/firestore"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// //3

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// let broef = console.log("heyllo")

export default db;