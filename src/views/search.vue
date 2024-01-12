<script setup>
import {RouterLink, useRouter} from 'vue-router'
import {ref, onMounted} from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import mainhead from '../components/header.vue'
import Ltemprecipes from '../components/Lbaserecipes.vue'
import Lcategories from '../components/Lcategories.vue'
// import router from '@/router';
const isLoggedIn = ref(false)
const router = useRouter()
const auth = getAuth();
onMounted(() => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        }
        else{
            isLoggedIn.value = false;
        }
    })
})
const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/")
    })
};

const search = ref("");
const items = ref([]);
const handle_search = () => {
    if (search.value !== "") {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
            .then(response => response.json())
            .then(data => {
                items.value = data.meals ? data.meals : [];
                search.value = "";
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}
</script>

<!-- <button @click="handleSignOut" v-if="isLoggedIn" class="bg-yellow-400"> log out</button> -->
<template>
    <main class="flex flex-col  gap-4 sm:px-[12px] 2xl:px-[16px] pb-10">
        <mainhead />
        <section class="flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14 ">
            <div class="flex flex-col  sm:w-full lg:w-[35%] gap-3 sm:gap-6">
                <div class="text-white text-[24px]  cathead flex justify-left items-center">Categories</div>
                <Suspense>
                <template #default>
                    <Lcategories /> 
                </template>
                </Suspense>
            </div>

            <div class="w-full flex flex-col gap-8">
                <div class=" flex justify-between  gap-3  text-[14px]">
                    <form class=" relative  w-[60%]" @submit.prevent="handle_search" @click="bro == false">
                        <input type="text"  placeholder="Search recipes and more..." name="search-input"  class="border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14 " v-model="search">
                        <img src="../assets/Search.svg" alt="" srcset="" class="absolute top-3 left-4">
                    </form>
                    <router-link to="/search" class="relative flex justify-center items-center  bg-white rounded-full  p-8 py-3 gap-2 h-12 text-[#394150]">
                        <i class="fa-regular fa-square-plus "></i>
                        <div class="font-semibold">CREATE</div>
                    </router-link>
                    <button @click="handleSignOut" v-if="isLoggedIn" class="bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center">
                        <i class="fa-solid fa-right-from-bracket text-base"></i>
                        <div class="text-base">Logout</div>
                    </button>
                </div>
                
                <section  v-if="items && items.length > 0" class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium">
                    <div v-for="item in items">
                        <router-link :to="/lmeals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]">
                            <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                            <div>{{ item.strMeal }}</div>
                        </router-link>
                    </div>
                </section>
                <section v-else>
                    <Suspense>
                        <template #default>
                            <ltemprecipes/> 
                        </template>
                    </Suspense>
                </section>
            </div>
        </section>
    
    </main>
</template>