
<script setup>
  import { RouterLink } from 'vue-router';
  import {ref} from 'vue';
  const overlay = ref(false)
  const active = ref(false)
</script>
<template>
    <header class="header fixed w-full flex justify-between sm:static md:justify-around items-center py-3 md:py-6 px-[5%] overflow-x-hidden z-[999] bg-yellow-400">
        <div class="flex justify-center items-center gap-1">
            <i class="fa-solid fa-bowl-food text-[25px] md:text-[30px] lg:text-[35px] 2xl:text-[41px] text-[#0E1325]"></i>
            <div class="lg:text-[18px] font-bold text-[#0E1325]">HomeChef</div>
        </div>
        <div class="md:flex md:justify-center md:items-center gap-3 md:gap-5 xl:gap-10 md:text-[13px] lg:text-[15px] 2xl:text-[19px] hidden font-medium">
            <RouterLink to="/discover" class="hover:underline underline-offset-4">
                Discover
            </RouterLink>
            <router-link to="/Safety" class="hover:underline underline-offset-4">
                Safety
            </router-link>
            <router-link to="/Support" class="hover:underline underline-offset-4">
                Support
            </router-link>
            <router-link to="/Blog" class="hover:underline underline-offset-4">
                Blog
            </router-link>
            <router-link to="/Careers" class="hover:underline underline-offset-4">
                Careers
            </router-link>
        </div>
        <div class="flex items-center gap-5">
            <router-link to="/Login" class=" p-2 lg:px-3 rounded-full text-[13px] md:text-[14px] 2xl:text-[17px] font-semibold bg-[#0E1325] text-white  hover:drop-shadow-xl duration-200">
                Open HomeChef
            </router-link>
            <button  @click="active = !active, overlay = !overlay" class="text-black flex flex-col pt-1 gap-2 md:hidden nav-open-btn">
                <span class="line duration-500 w-[42px] h-[2px] bg-black " :class="{ openBtn1: active }"></span>
                <span class="line duration-500 w-[42px] h-[2px] bg-black" :class="{ openBtn2: active }"></span>
                <span class="line duration-500 w-[42px] h-[2px] bg-black" :class="{ openBtn3: active }"></span>
            </button>
        </div>
        
        <!-- </div> -->
        
        
    </header>
    <!-- v-motion :initial="{opacity:0 }" :visible="{opacity:1, animationDuration:2}" -->
    <div v-if="overlay"  class="overlay-1 duration-500 fixed w-full h-full top-14 flex flex-col gap-4 z-[999] text-black bg-gray-100 overflow-hidden">
        <div class=" flex flex-col gap-8 text-lg py-2 px-[10%] font-medium">
            <RouterLink to="/discover" class="flex justify-between px-[2%]">
                <div class="flex gap-2">
                    <h2>Discover</h2>
                </div>
            </RouterLink>
            <RouterLink to="/Safety" class="flex justify-between px-[2%] items-center">
                <div class="flex gap-2">
                    <h2>Safety</h2>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
            </RouterLink>

            <RouterLink to="/Support" class="flex justify-between px-[2%]">
                <div class="flex gap-2">
                    <h2>Support</h2>
                </div>
            </RouterLink>
            
            <RouterLink to="/Blog" class="flex justify-between px-[2%]">
                <div class="flex gap-2">
                    <h2>Blog</h2>
                </div>
            </RouterLink>
        
            <RouterLink to="/Careers" class="flex justify-between px-[2%]">
                <div class="flex gap-2">
                    <h2>Careers</h2>
                </div>
            </RouterLink>
    
        </div>
         
    </div>
    
</template>
<style scoped>

.openBtn1{
    transform: translateY(10px) rotate(45deg);
    width: 40px;
}
.openBtn2{
    opacity: 0;
}
.openBtn3{
    transform: translateY(-10px) rotate(-45deg);
    width: 40px;
}

.line{
    transition: all 0.4s ease-in-out;
}
/* .overlay-1{
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.9s ease-out , visibility 0s;
  display: hidden;
  width: 100%;
}
.overlay-1:active{
  transform: translateX(0%);
  opacity: 1;
  transition: transform 0.4s ease-out, visibility 0s;
  display: block;
} */

/* .nav-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.nav-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.nav-enter-active {
  transition: all transform 0.4s ease-out, visibility 2s;
  opacity: 1;
}
.line1-enter-from {
  transform: translateX(0);
  width: 42px;
}
.line1-enter-to {
  transform: translateY(10px) rotate(-45deg);
  width: 39px;
}
.line1-enter-active {
  transition: transform 0.4s ease-out, visibility 0s;
  opacity: 1;
} */

/* end */
/* .nav-open-btn .line:nth-child(1):active {
  transform: translateY(10px) rotate(-45deg);
  width: 39px;
}
.nav-open-btn .line:nth-child(3):active {
  transform: translateY(-10px) rotate(45deg);
  width: 39px;
  
}
.nav-open-btn .line:nth-child(2):active {
  opacity: 0;
} */
</style>
<!-- .line1-enter-from {
  width: 42px;
}
.line1-enter-to {
  transform: translateY(10px) rotate(-45deg);
  width: 39px;
} -->