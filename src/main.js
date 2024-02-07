import './assets/main.css'
// import './firebase'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",
  authDomain: "recipe-page-a168a.firebaseapp.com",
  projectId: "recipe-page-a168a",
  storageBucket: "recipe-page-a168a.appspot.com",
  messagingSenderId: "540105599417",
  appId: "1:540105599417:web:68b26438060496e3412e68",
  measurementId: "G-G49BH7ELT1"
};

const apps = initializeApp(firebaseConfig);
// const db = getFirestore(apps);
const app = createApp(App)

app.use(router)
// recipe-page-a168a.firebaseapp.com
// recipe-page-eosin.vercel.app
app.mount('#app')



export {apps};

