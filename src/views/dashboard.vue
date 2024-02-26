<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import db from'../firebase.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query} from "firebase/firestore"; 
import create from '../components/createMeals.vue';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged} from "firebase/auth";
// import currentUser from '../components/user.vue'
const showModal = ref(false)

onMounted(() => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // console.log(user)
            let names  = user.displayName
            usersName.value = names
            return usersName
            
            // ...
        } else {
            // User is signed out
            // ...
        }
    })
})


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
    // console.log(usersName)
    return usersName
    
    // ...
  } else {
    // User is signed out
    // ...
  }
});

export default {
    name:'app',
    components:{},
    methods: {
        createRecipe: function() {
            addDoc(collection(db, 'recipees'), {
            recipe_id: Math.floor(Math.random() * 1000000),
            name:this.$refs.recipeName.value,
            date_created:new Date(Date.now()).toLocaleString(),
            Ingredients:this.$refs.recipeIngredients.value,
            instructions:this.$refs.recipeInstructions.value,
            username:usersName.value,
            });
        },
        // Date.now()
        bro: function(){
            this.$refs.recipeName.value = ''
            this.$refs.recipeIngredients.value = ''
            this.$refs.recipeInstructions.value = ''
            alert("recipe created")
        },
        getRandomColor: function (){
            return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
        }
    },

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
            
            }
        })
    })
    
    onMounted(liveMessages)
    }
// check if photo url is possible
}
</script>
<template>
    <section class="w-full flex flex-col gap-10 ">
        <header class="px-[5%] flex justify-between text-[12px] lg:text-[18px]  text-[#394150] w-full py-10">
            <router-link to = "/home" class="flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3">
                <img src="../assets/Expand_left.svg" alt="" srcset="">
                <div>Back to categories</div>
            </router-link>
            <div class="bg-green-300 flex items-center px-2 rounded-full font-extrabold text-[9px] lg:text-[16px] text-center">
                {{ usersName.value }}
            </div>
            <button class="flex gap-2 bg-yellow-400 rounded-2xl items-center p-3 md:p-4 md:px-6" @click="showModal = true">
                <i class="fa-regular fa-square-plus "></i>
                <div class="font-semibold">New Recipe</div>
            </button>
        </header>
        
        <div id="dashboard" class="text-[24px] font-bold text-white text-center">
            <h3>Community Recipe Dashboard</h3>
        </div>

        <section class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] lg:px-[6%]">
            <div  v-for="item in recipes" class="relative" :key="item.id">
                <router-link :to="/dashmeals/ + item.id"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                    <img v-if="item.img" :src="item.img" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] md:w-[800px]" id="your-img">
                    <i v-else class="fa-solid fa-bowl-food text-[100px] sm:[120px] md:text-[125px] lg:text-[150px] flex justify-center items-center "></i>
                    <section class="flex justify-between text-white">
                        <div class="flex flex-col">
                            <div class="font-bold text-xl text-yellow-400">
                                {{ item.name }}
                            </div>
                            <div class="text-sm font-semibold">
                                {{ item.created }}
                            </div>
                        </div>
                        <div class="px-3 bg-gray-400 flex items-center rounded-lg font-bold" >
                            {{ item.user }}
                        </div>
                    </section>
                </router-link>
            </div>
        </section>

        <!-- 52827 -->

        <div v-if="showModal" class="overlay  absolute w-full h-full bg-[#394150]  z-10 flex items-center justify-center sm:px-[10%] lg:px-[20%] 2xl:px-[25%]" id="recipes">
            <div class="modal w-full bg-[#0E1325] rounded-xl p-[35px] relative flex flex-col gap-4 ">
                <div class="text-gray-100 flex justify-end text-xs">*Recommended that users complete all fields*</div>
                <input ref="recipeName" type="text" name="Name" placeholder="Enter recipe name" class=" p-3 rounded-lg ">
                <input ref="recipeIngredients"  name="measurement + ingredients" placeholder="Measurements / Ingredients. Example: 1600g Flour, 1/2 tsp Salt ect.." class="p-2 rounded-md border border-[#394150]"> 
                <textarea ref="recipeInstructions" name="note" id="note" cols="30" rows="2" class="rounded-lg p-3" placeholder="enter instructions"></textarea>
                <!-- <div class="flex flex-col gap-2">
                    <div class="text-white">Upload image</div>
                    <input class="text-white cursor-pointer" type="file" accept="image/jpeg" @change=uploadImage>
                </div> -->
                <button class="p-[10px 20px] text-[20px] w-full bg-green-100  border-none text-black cursor-pointer p-2 font-semibold" @click="createRecipe(),showModal = false, bro(), toasts = true">Create Recipe</button>
                <button class=" text-white font-semibold text-[18px]" @click="showModal = false">Cancel</button>
            </div>
        </div>
    </section>

    
    
</template>
<style>
.body{
    background-color: aqua;
}
</style>