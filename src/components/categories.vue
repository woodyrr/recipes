
<script setup>
    import {ref} from 'vue'
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php?'
    const foodlist = ref({});
    fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        foodlist.value = data.categories
    });
    const overlay = ref(false)
</script>
<template>

        <section class="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2  gap-3 sm:gap-4 xl:gap-4">
            <div v-for="item in foodlist" class="relative">
                <router-link :to="/category/ + item.strCategory" class=" bg-transparent bg-[#0E1325] border border-[#394150] flex gap-3 rounded-xl duration-300 hover:bg-[#FEBD2E] text-[#E5E7EB] hover:text-black hover:font-bold overflow-hidden">
                    <img :src="item.strCategoryThumb" alt="" srcset="" class="catimg w-[50%] sm:w-[32%] lg:w-[42%] xl:w-[63%]  lg:ml-[-40px] sm:ml-[-40px] ml-[-20px] itemimg  rounded-l-full ">
                    <div class="flex justify-center items-center text-[14px] 2xl:text-[16px]">{{ item.strCategory }}</div>
                </router-link>
            </div>
        </section>
    
    
</template>
<style>
.itemimg{
    image-rendering: -webkit-optimize-contrast;
}

</style>