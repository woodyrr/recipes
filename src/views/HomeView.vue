<script setup>
import headerButtons from '../components/header1.vue'
import foot from '@/components/Footer.vue'
//import { directive as motion } from '@vueuse/motion'

</script>

<template>
    <main class="bg-white">
        <section class=" bg-yellow-400 xl:pb-10">
            <headerButtons />
            <div class="sm:p-[1px] w-full flex flex-col gap-10 2xl:py-12 pt-12">
                <section class=" flex flex-col  text-lg py-8 md:py-6  gap-3 md:gap-6 2xl:gap-10" >
                    <!-- <div class="flex flex-col"> -->
                        <!-- bg-grill-cooking bg-no-repeat bg-[86%] -->
                        <div class="flex justify-center flex-col gap-5 lg:gap-10 grill-sec lg:bg-grill-cooking bg-no-repeat bg-[90%]  ">
                            <h1 class="text-[33px]  sm:text-[37px] lg:text-[38px]  2xl:text-[47px] font-bold text-center imagine">Imagine a place...</h1>
                            <p class="px-[5%] lg:px-[25%] text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[21px] ">...where you can explore culinary creativity, connect with fellow home chefs,
                                or join a global community passionate about the art of home cooking.
                                A place that makes it effortless to share recipes, exchange tips, and savor the joy of cooking together, transforming your kitchen into a hub of delicious possibilities."
                            </p>
                        </div>
                        <div class="flex flex-col sm:flex-row justify-center gap-3 lg:gap-10 px-[8%] md:px-0">
                            <button class="flex justify-center items-center gap-2 bg-[#0E1325] py-3 px-5 text-white rounded-full  hover:drop-shadow-lg duration-200 text-[16px] md:text-base 2xl:text-[19px]">
                                <i class="fa-solid fa-download"></i>
                                <div>Download For IOS</div>
                            </button>
                            <router-link to="/Login" class="flex justify-center items-center gap-2 bg-gray-200 py-3 px-5 text-black font-semibold rounded-full hover:drop-shadow-lg duration-200 text-[16px] md:text-base 2xl:text-[19px]">Open HomeChef in your browser</router-link>
                        </div>
                    <!-- </div> -->
                    
                    <!-- <div class="flex justify-between px-[5%] lg:px-[8%] items-center">
                        <div class="maintop relative w-[300px] lg:w-[500px] drop-shadow-xl">
                            <img src="../assets/hero-imagehc.jpg" alt="" srcset="" class="rounded-full">
                        
                            <img src="../assets/hero-text.svg" alt="" srcset=""  class="absolute top-6 right-20 sm:top-8  sm:right-16 w-[35%] sm:w-[45%] md:w-[35%]  md:top-[15%]  md:right-[15%] 2xl:w-[30%] 2xl:right-[20%] ">
                        </div>
                        
                        <div>
                            <img src="../assets/grill.svg" alt="" srcset="" class="w-[300px] lg:w-[300px]">
                        </div>
                    </div> -->
                </section>
                
            </div>


            
        </section>

        <div class="flex flex-col text-[25px] text-center md:text-left">
            <!-- xl:h-[220px] 2xl:h-[290px] -->
            <div class="target bg-gray-100 flex flex-col md:flex-row items-center px-[2%] md:px-[8%] 2xl:px-[15%] justify-between gap-6 md:gap-10 2xl:gap-16 duration-500 py-10 2xl:py-16" v-motion :initial="{opacity:0 }" :visible="{opacity:1, animationDuration:2}">
                
                <div class="w-[40%] xl:w-full">
                    <img src="/src/assets/pizza.svg" alt="" srcset="" class="xl:w-[80%] rounded-full">
                </div>
                <!-- <div class=" grill-sec lg:bg-grill-cooking bg-no-repeat bg-[92%] xl:bg-[86%] xl:h-[220px] 2xl:h-[290px] "></div> -->
                <div class="w-full flex flex-col gap-3 md:gap-5">
                    <h3 class="font-bold text-[26px] 2xl:text-[34px] imagine">Craft an exclusive space where culinary enthusiasts converge</h3>
                    <p class="text-[20px] 2xl:text-[24px]">- our platform organizes kitchen discussions into specialized channels, allowing you to collaborate on recipes, share kitchen triumphs, and engage in delightful conversations without cluttering your culinary community.</p>
                </div>
            </div>
            <div class="target bg-gray-200 flex flex-col-reverse md:flex-row items-center px-[2%] md:px-[8%] 2xl:px-[15%] justify-between gap-6 md:gap-10 2xl:gap-16 duration-500 py-10 2xl:py-12" v-motion :initial="{opacity:0 }" :visible="{opacity:1, animationDuration:2}">
                <!-- <div class=" grill-sec lg:bg-grill-cooking bg-no-repeat bg-[92%] xl:bg-[86%] xl:h-[220px] 2xl:h-[290px] "></div> -->
                <div class="w-full flex flex-col gap-3 md:gap-5">
                    <h3 class="font-bold 2xl:text-[34px] imagine">Where choosing your favorite food categories is easy</h3>
                    <p class="text-[20px] 2xl:text-[24px]">Click away to our multiple food categories options when free. Experiment and improve your food pallete with our large quatity of delicious meals. </p>
                </div>
                <div class="w-[40%] xl:w-full">
                    <img src="/src/assets/foods.jpg" alt="" srcset="" class="xl:w-[80%] rounded-full">
                </div>
            </div>
            <div class="target bg-gray-100 flex flex-col md:flex-row items-center px-[2%] md:px-[8%] 2xl:px-[20%] justify-between gap-6 md:gap-10 2xl:gap-8 duration-900 py-10 2xl:py-20" v-motion :initial="{opacity:0 }" :visible="{opacity:1, animationDuration:2}">
                <div class="w-[75%] sm:w-[50%] xl:w-full">
                    <img src="/src/assets/deserts.png" alt="" srcset="" class="xl:w-[80%] rounded-lg">
                </div>
                <div class="w-full flex flex-col gap-3 md:gap-5">
                    <h3 class="font-bold 2xl:text-[34px] imagine">From your mind to multiple plates</h3>
                    <p class="text-[20px] 2xl:text-[24px]">Find, create and share any meal you desire. Explore culinary creativity, connect with fellow home chefs, or join a global community passionate about the art of home cooking.</p>
                </div>
            </div>
            <div class="target bg-gray-200 flex flex-col text-center items-center px-[2%] 2xl:px-[16%] justify-center gap-6 md:gap-10 2xl:gap-12 duration-900 py-10 2xl:py-12" v-motion :initial="{opacity:0 }" :visible="{opacity:1, animationDuration:2}">
                <div class="w-full flex flex-col gap-3 md:gap-4">
                    <h3 class="font-bold 2xl:text-[40px] ending ">Reliable and delicious food recipes</h3>
                    <p class="text-[20px] 2xl:text-[22px]">Embark on a culinary journey with our HomeChef recipe website, where we curate a world of flavors at your fingertips. From mouthwatering recipes to expert tips, we're your go-to destination for elevating home cooking to an art form.</p>
                </div>
                <div class="w-[95%] sm:w-[40%] xl:w-full">
                    <img src="/src/assets/homechefs.png" alt="" srcset="" class="xl:w-full rounded-md xl:px-[20%]">
                </div>
                <div class="flex flex-col gap-2 ">
                    <h4 class="text-[30px]">Ready to start your journey?</h4>
                    <button class="flex justify-center items-center gap-2 bg-[#0E1325] py-3 px-5  text-white rounded-full  hover:drop-shadow-lg duration-200 text-[16px] md:text-base 2xl:text-[19px]">
                        <i class="fa-solid fa-download"></i>
                        <div>Open HomeChef in your browser</div>
                    </button>
                </div>
            </div>

            
        </div>

        <foot />
    </main>
    
    
</template>


<style>
/* font-family: "Abcgintonord 800",sans-serif;
    font-size: 56px;
    font-weight: 700; */

    .imagine {
    font-family: "Source Code Pro", monospace;
    font-optical-sizing: auto;
    font-style: normal;
    }
    .ending {
    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    font-style: normal;
    }
    .grill-sec{
        background-size: 100px;
    }
    .string{
        background-size: 20%;
    }
    .logo-sec{
        background-size: 550px;
        
    }
    @media screen and (min-width: 1040px) {
        .grill-sec{
            background-size: 190px;
        }
        .logo-sec{
        background-size: 650px;
        
    }
    }
    @media screen and (min-width: 1440px) {
        .grill-sec{
            background-size: 190px;
        }
        .logo-sec{
        background-size: 650px;
        
    }
    }
    /* .target {
        
    } */
    /* @media screen and (min-width: 640px) and ( max-width: 768px) {
        .maintop{
        background-image: url(../assets/hero-imagehc.jpg);
        width: 100%;
        height: 290px;
        background-size: cover;background-position:50% 50%;
        image-rendering: -webkit-optimize-contrast;
        background-repeat: no-repeat;
        border-radius: 10px;
        
    }
     } */
    
</style>