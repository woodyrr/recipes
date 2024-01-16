<script setup>
import {ref} from 'vue'
import { RouterLink } from 'vue-router';
const base1 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049"
const base2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893"
const base3 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768"
const base4 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767"
const base5 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855"
const base6 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52894"
const base7 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52877"
const base8 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52835"
const base9 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52999"
const foodlist1 = ref({});
fetch(`${base1}`)
.then(response => response.json())
.then(data => {
    foodlist1.value = data
});

const foodlist2 = ref({});
fetch(`${base2}`)
.then(response => response.json())
.then(data => {
    foodlist2.value = data
});


const foodlist3 = ref({});
fetch(`${base3}`)
.then(response => response.json())
.then(data => {
    foodlist3.value = data
});


const foodlist4 = ref({});
fetch(`${base4}`)
.then(response => response.json())
.then(data => {
    foodlist4.value = data
});


const foodlist5 = ref({});
fetch(`${base5}`)
.then(response => response.json())
.then(data => {
    foodlist5.value = data
});


const foodlist6 = ref({});
fetch(`${base6}`)
.then(response => response.json())
.then(data => {
    foodlist6.value = data
});

const foodlist7 = ref({});
fetch(`${base7}`)
.then(response => response.json())
.then(data => {
    foodlist7.value = data
});

const foodlist8 = ref({});
fetch(`${base8}`)
.then(response => response.json())
.then(data => {
    foodlist8.value = data
});

const foodlist9 = ref({});
fetch(`${base9}`)
.then(response => response.json())
.then(data => {
    foodlist9.value = data
});



</script>
<template>
    <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium">
        <div v-for="item in foodlist1.meals ">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
        </div>
        <div v-for="item in foodlist2.meals">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
        </div>
        <div v-for="item in foodlist3.meals">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
        </div>
        <div v-for="item in foodlist4.meals">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
        </div>
        <div v-for="item in foodlist5.meals">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
        </div>
        <div v-for="item in foodlist6.meals">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
            
        </div> 
        <div v-for="item in foodlist7.meals">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
            
        </div> 
        <div v-for="item in foodlist8.meals">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
            
        </div> 
        <div v-for="item in foodlist9.meals">
            <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </router-link>
            
        </div> 
        
    </section>
       
</template>

<style>
img{
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
    
}

</style>