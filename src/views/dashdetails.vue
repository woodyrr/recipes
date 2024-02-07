<script setup>
// import {ref, onBeforeMount, computed} from 'vue'
// import { useRoute, RouterLink } from 'vue-router';
// const food = ref({});
// const route = useRoute();

// const filteredIngredients = computed(() => {
//   const ingredients = [];
//   for (let index = 1; index <= 20; index++) {
//     const ingredient = food.value.meals[0]['strIngredient' + index];
//     const measure = food.value.meals[0]['strMeasure' + index];

//     if (ingredient && ingredient.length > 1 && measure) {
//       ingredients.push(`${measure} ${ingredient}`);
//     }
//   }
//   return ingredients;
// });


// onBeforeMount(async () => {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`);
//     const data = await response.json();
//     console.log(data)
//     food.value = data;
    
// });


import {ref, onMounted, onUnmounted} from 'vue'
import db from'../firebase.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query} from "firebase/firestore"; 
// import create from '../components/createMeals.vue';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged} from "firebase/auth";
import { useRoute, RouterLink } from 'vue-router';
// import currentUser from '../components/user.vue'
const route = useRoute();


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
        // console.log(user)
        return usersName

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
        const recipeColection = query(collection(db, 'recipees'));
        // console.log(liveMessages)
        const liveMessages = onSnapshot(recipeColection, (snapshot) => {
            this.recipes = snapshot.docs.map((doc) => {
                return {
                    id:doc.id,
                    ingredients:doc.data().Ingredients,
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
    <main class=" w-full  text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10">
        <section class=" flex flex-col gap-8">
            <div class="px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full">
                <img src="../assets/logo-light.svg" alt="" srcset="" class=" h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]">
                <router-link to="/dashboard" class="flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3">
                    <img src="../assets/Expand_left.svg" alt="" srcset="">
                    <div>Back to Dashboard</div>
                </router-link>
            </div>
            <div v-for="item in recipes" class="px-[4%]">
                <div class="flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"  v-if="item.id == route.params.id">
                    <img v-if="item.img" :src="item.img" alt="meal-thumbnail" srcset="" class="  rounded-lg   w-full sm:h-[450px] 2xl:h-[500px]" id="your-img">
                    <i v-else class="fa-solid fa-bowl-food text-[100px] sm:[120px] md:text-[125px] lg:text-[150px] flex justify-center items-center "></i>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-4">
                            <h2 class="text-[30px] lg:text-[45px] detailhead">{{ item.name }}</h2>
                        </div>
                        <div class="flex justify-center items-center px-3 md:px-5 rounded-full bg-blue-300  text-black  font-extrabold">
                            {{ item.user }}
                        </div>
                    </div>
                    <!-- bg-[#4E80EE] -->
                    <div class="ingredients flex flex-col gap-5 px-2 md:px-0">
                        <div class="flex gap-4">
                            <button class="bg-[#FEBD2E] p-3 py-5 rounded-full"></button>
                            <h3 class="font-bold flex items-center text-[18px]">Ingredients</h3>
                        </div>
                        <div>
                            {{item.ingredients}}
                        </div>
                    </div>

                    <div class="Instructions flex flex-col gap-5 px-2 md:px-0">
                        <div class="flex gap-4">
                            <button class="bg-[#4E80EE] p-3 py-5 rounded-full"></button>
                            <h3 class="font-bold flex items-center text-[18px]">Instructions</h3>
                        </div>
                        <p class="text-[17px] instruct whitespace-pre-line">
                            {{ item.instructions }} 
                        </p>
                    </div>
                    
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <div>Video</div>
                            <a :href="item.strYoutube" target="_blank" v-if="item.strYoutube">
                                <div class="text-[#845EEE]">{{ item.strYoutube }}</div>
                            </a>
                            <div class="text-yellow-400 text-sm md:text-base" v-else>
                                Not Currently availlable!!!
                            </div>
                        </div>
                        <div class="flex items-center">
                            {{ item.created }}
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>
    </main>
</template>

<style scoped>
img{
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
    
}
.detailhead{
  font-family: 'Playfair Display', serif;
}

</style>