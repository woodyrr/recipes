<script setup>
import {ref, onMounted, onBeforeMount,reactive} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import mainhead from './header.vue'
import temprecipes from './baserecipes.vue'
import categories from './categories.vue'
// import login from '@/views/login.vue'
let list1 = false
// import db from '../db'
// let baseurl1 = "https://www.themealdb.com/api/json/v1/1/search.php?s="

// const handle_search = () => {
//     if (search.value != ""){
//         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
//         .then(response => response.json())
//         .then(data => {
//             items.value = data.meals.slice(0,20)
//             search.value = ""
            
//         })
//     }
    
// }
const search = ref("");
const items = ref([]);
const handle_search = () => {
    if (search.value !== "") {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
            .then(response => response.json())
            .then(data => {
                items.value = data.meals ? data.meals.slice(0, 20) : [];
                search.value = "";
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}
let bro = true

// const inputUsername = ref("");
//     const state = reactive({
//         usename:"",
//         recipes:[{}]
//     })
//     const login = () =>{
//         if (inputUsername.value != "" || inputUsername.value != null ){
//             state.usename = inputUsername.value;
//             inputUsername.value = "";
//         }
//     }
</script>

<template >

  <main class="flex flex-col  gap-4 sm:px-[12px] 2xl:px-[16px]">
    <mainhead />
    <section class="flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14 ">
      <div class="flex flex-col  sm:w-full lg:w-[35%] gap-3 sm:gap-6">
        <div class="text-white text-[24px]  cathead flex justify-left items-center">Categories</div>
        <Suspense>
          <template #default>
            <categories /> 
          </template>
        </Suspense>

      </div>

      <div class="w-full flex flex-col gap-8">
        <div class=" flex justify-between  gap-3  text-[14px]">
          <form class=" relative  w-[60%]" @submit.prevent="handle_search" @click="bro == false">
            <input type="text"  placeholder="Search recipes and more..." name="search-input"  class="border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14 " v-model="search">
            <img src="../assets/Search.svg" alt="" srcset="" class="absolute top-3 left-4">
          </form>
          <router-link to="/login" class="relative flex justify-center items-center  bg-white rounded-full  p-8 py-3 gap-2 h-12 text-[#394150]">
            <i class="fa-solid fa-right-from-bracket text-base"></i>
              <div class="text-[14px] font-semibold">SignIn / SignUp</div>
          </router-link>
        </div>
        
        <section  v-if="items && items.length > 0" class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium">
            <div v-for="item in items">
                <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]">
                    <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                    <div>{{ item.strMeal }}</div>
                </router-link>
            </div>
        </section>
        <section v-else>
            <Suspense>
                <template #default>
                    <temprecipes/> 
                </template>
            </Suspense>
        </section>
      </div>

    </section>
    
  </main>
  
    
</template>

<style>
.cathead{
  font-family: 'Playfair Display', serif;
}

</style>