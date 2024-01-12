<script setup>

</script>
<template>
    <!-- <main class=" "> -->
      <div class="sm:pt-[12px] w-full ">
        <div class="maintop relative ">
            <img src="../assets/hero-imagehc.jpg" alt="" srcset="" class="w-full h-[190px] sm:h-[330px] sm:rounded-lg  mainimg sm:hidden md:block md:h-full 2xl:h-[65vh]">
            <img src="../assets/hero-text.svg" alt="" srcset=""  class="absolute top-6 right-20 sm:top-8  sm:right-16 w-[35%] sm:w-[45%] md:w-[35%]  md:top-[8%]  md:right-[15%] 2xl:w-[30%] 2xl:right-[22%] ">
        </div>
      </div>
    <!-- </main> -->
</template>
<style>
    @media screen and (min-width: 640px) and ( max-width: 768px) {
        .maintop{
        background-image: url(../assets/hero-imagehc.jpg);
        width: 100%;
        height: 290px;
        background-size: cover;background-position:50% 50%;
        image-rendering: -webkit-optimize-contrast;
        background-repeat: no-repeat;
        border-radius: 10px;
        
    }
     }
    
</style>