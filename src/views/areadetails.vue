<script setup>
import {ref, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';
const food = ref({});
const route = useRoute();

onBeforeMount(() => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${route.params.id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      food.value = data.meals;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
</script>

<template>
    <main class=" w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10">
        <section class=" flex flex-col gap-10">
            <div class="px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full">
                <img src="../assets/logo-light.svg" alt="" srcset="" class=" h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]">
                <router-link to="/home" class="flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3">
                    <img src="../assets/Expand_left.svg" alt="" srcset="">
                    <div>Back to categories</div>
                </router-link>
            </div>
            <div class="flex justify-center text-[35px] detailhead">
                {{route.params.id }} meals
            </div>
            <!-- <div>test</div> -->
            <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium">
                <div v-for="item in food">
                    <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]  ">
                        <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                        <div>{{ item.strMeal }}</div>
                    </router-link>
                </div>
            </section>
            
            
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