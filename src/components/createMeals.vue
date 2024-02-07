<script setup>
import {ref, onMounted, onUnmounted } from 'vue'
import db from'../firebase.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 

const showModal = ref(false)
const newNote = ref('')
const notes = ref([])
const mesure = ref([]);
const num = ref(0);
const recipes = ref([])
const addNote = () => {
    notes.value.push({
        id: Math.floor(Math.random() * 1000000),
        text: newNote.value,
        date: new Date(),
    //   bg: getRandomColor(),
    })
    showModal.value = false;
    newNote.value = ''
}

const newlist = () => {
  num.value++;
  mesure.value.push({
    measure: `measurement ${num.value}`,
    ingredient: `ingredient ${num.value}`,
  });
};


onMounted(async() => {
    let recipeColection = await getDocs(collection(db, 'personal recipes'))
    recipeColection.forEach((recipe) => {
        recipes.value.push({...recipe.data(), id: recipe.id})
        console.log(recipe.data(), recipe.id)
    });
})

// let mounted = () =>{
//     let recipeColection = query(collection(db, 'personal recipes'), orderBy('date'));
//     const liveMessages = onSnapshot(recipeColection, (snapshot) => {
//         recipes.value = snapshot.docs.map((doc) => {
//             return {
//                 id:doc.id,
//                 ingredients:doc.data().ingredients,
//                 name:doc.data().name,
//                 created:doc.data().date_created
            
//             }
//         })
//     })
//     onMounted(liveMessages)
// }

// mounted(){
//     const latestQuery = query(collection(db, "messages"), orderBy('date'));
//     onSnapshot(latestQuery, (snapshot)=>{})
// }

// const created = () => {
//     try {
//         db.collection('personal recipes').get()
//             console.log("Document written with ID: ", docRef.id);
//         } 
//         catch (e) {
//             console.error("Error adding document: ", e);
//         }
// }

// data collection


</script>

<template>
    <!-- <section class="flex flex-col gap-10 "> -->
    <div class="modal w-full bg-[#0E1325] rounded-xl p-[35px] relative flex flex-col gap-4 ">
        <div class="text-gray-100 flex justify-end text-xs">*Recommended that users complete all fields*</div>
        <input type="text" name="Name" placeholder="Enter recipe name" class=" p-3 rounded-lg ">
        <div class="flex flex-col md:flex-row md:justify-between gap-2">
            <!-- flex flex-col md:flex-row gap-2 -->
            <!-- flex flex-col md:flex-row md:justify-between gap-2 -->
            <div class="flex flex-col  gap-2">
                <div v-for="(note, index) in mesure" :key="index" class="">
                    <div class="flex flex-col md:flex-row gap-2">
                        <input :placeholder="note.measure" :id="'measure' + index" class="p-2 rounded-md border border-[#394150]">
                        <input :placeholder="note.ingredient" :id="'ingredient' + index" class="p-2 rounded-md">
                    </div>
                    
                </div>
            </div>
            <button class="bg-yellow-400 flex gap-1 justify-center items-center px-2 h-10 rounded-lg" @click="newlist">
                <i class="fa-regular fa-square-plus"></i>
                <div class="font-semibold">Add ingredient</div>
            </button>
        </div>
        <textarea v-model = 'newNote' name="note" id="note" cols="30" rows="2" class="rounded-lg p-3" placeholder="enter instructions"></textarea>
        <div class="flex flex-col gap-2">
            <div class="text-white">Upload image</div>
            <input class="text-white cursor-pointer" type="file" accept="image/jpeg" @change=uploadImage>
        </div>
        
        <button class="p-[10px 20px] text-[20px] w-full bg-green-100  border-none text-black cursor-pointer p-2 font-semibold" @click="addNote">Create Recipe</button>
        <button class=" text-white font-semibold text-[18px]" @click="showModal = false">Cancel</button>
    </div>
<!-- </div> -->


    <div class="max-w-[1000px] p-[10px] mt-0 mx-auto">
        <div class="mt-6 flex flex-wrap" >
            <div v-for="note in notes"
                :key="note.id" class="w-[225px] h-[225px] p-[10px] rounded-2xl bg-gray-200 flex flex-col justify-between mr-[20px] mb-[20px] text-black" :style="{backgroundColor: note.bg}">
                <p class="main-text">{{ note.text }}</p>
                <p class="date text-sm font-bold">{{ note.date.toLocaleDateString("en-US") }}</p>
            </div>
        </div>
    </div>
    <!-- </section> -->
    
</template>