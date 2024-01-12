import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { initializeApp } from "firebase/app";
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

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(apps);
// export default {apps,provider};

const app = createApp(App)

app.use(router)

app.mount('#app')
