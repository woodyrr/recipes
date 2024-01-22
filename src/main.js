import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { initializeApp } from "firebase/app";
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

// const firestore = firebase
// Initialize Firebase
const apps = initializeApp(firebaseConfig);
// const analytics = getAnalytics(apps);
// export default {apps,provider};

const app = createApp(App)

app.use(router)
// recipe-page-a168a.firebaseapp.com
// recipe-page-eosin.vercel.app
app.mount('#app')
export {apps};







//test 

// import './assets/main.css'
// import router from './router'
// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// import firebase from "firebase/app";
// import "firebase/firestore"


// const firebaseConfig = {
//   apiKey: "AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",
//   authDomain: "recipe-page-a168a.firebaseapp.com",
//   projectId: "recipe-page-a168a",
//   storageBucket: "recipe-page-a168a.appspot.com",
//   messagingSenderId: "540105599417",
//   appId: "1:540105599417:web:68b26438060496e3412e68",
//   measurementId: "G-G49BH7ELT1"
// };


// const apps = firebase.initializeApp(firebaseConfig);

// const app = createApp(App)


// const firestore = firebase.firestore()
// const messagesCollection = firestore.collection("messages")
// const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)

// export function useChat(){
//     const messages = ref([])
//     messagesQuery.onSnapshot(snapshot => {
//         messages.value = snapshot.docs
//         .map(doc => ({ id: doc.id, ...doc.data() }))
//         .reverse()
//     })
//     onMounted(unsubscribe)

//     const sendMessage = text => {}


//     return {messages, sendMessage}
// }



// app.use(router)
// app.mount('#app')
// export default apps;
