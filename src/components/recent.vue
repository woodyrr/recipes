<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import db from'../firebase.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query} from "firebase/firestore"; 
import create from '../components/createMeals.vue';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged} from "firebase/auth";
// import currentUser from '../components/user.vue'
const showModal = ref(false)

</script>

<script>
let usersName = []
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // console.log(user)
    let names  = user.displayName
    usersName.value = names
    return usersName
    // console.log()
    // ...
  } else {
    // User is signed out
    // ...
  }
});

export default {
    name:'app',
    components:{},
    methods: {},

    data:()=>{
        return {
            recipes:ref([])
        }
    },

    mounted() {
    const recipeColection = query(collection(db, 'recipees'), orderBy("name", "desc"));
    const liveMessages = onSnapshot(recipeColection, (snapshot) => {
        this.recipes = snapshot.docs.map((doc) => {
            return {
                id:doc.id,
                ingredients:doc.data().ingredients,
                instructions:doc.data().instructions,
                name:doc.data().name,
                created:doc.data().date_created,
                user:doc.data().username,
                // bg:doc.data().bg
            
            }
        })
    })
    
    onMounted(liveMessages)
    }
// check if photo url is possible
}
</script>

<template>
    <h2 class="text-white text-center font-bold text-lg lg:text-xl hidden lg:block">Recently added</h2>
    <div  v-for="item in recipes" class="relative hidden lg:block" :key="item.id">
        <router-link :to="/dashmeals/ + item.id"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
            <section class="flex justify-between text-white">
                <div class="flex flex-col">
                    <div class="font-bold text-xl text-yellow-400 ">
                        {{ item.name }}
                    </div>
                    <div class="text-sm font-semibold">
                        {{ item.created }}
                    </div>
                </div>
                <div class="px-3 bg-gray-300 flex text-black items-center rounded-full font-bold" >
                    {{ item.user }}
                </div>
            </section>
            <!-- :style="{backgroundColor: item.bg}" -->
        </router-link>
    </div>
</template>