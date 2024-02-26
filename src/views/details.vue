<script setup>
import {ref, onBeforeMount, computed} from 'vue'
import { useRoute, RouterLink } from 'vue-router';
const food = ref({});
const route = useRoute();

const filteredIngredients = computed(() => {
  const ingredients = [];
  for (let index = 1; index <= 20; index++) {
    const ingredient = food.value.meals[0]['strIngredient' + index];
    const measure = food.value.meals[0]['strMeasure' + index];

    if (ingredient && ingredient.length > 1 && measure) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  return ingredients;
});


onBeforeMount(async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`);
    const data = await response.json();
    // console.log(data)
    food.value = data;
    
});

</script>

<template>
    <main class=" w-full  text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10 ">
        <section class=" flex flex-col gap-10">
            <div class="px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full">
                <img src="../assets/logo-light.svg" alt="" srcset="" class=" h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]">
                <router-link to="/home" class="flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3">
                    <img src="../assets/Expand_left.svg" alt="" srcset="">
                    <div>Back to categories</div>
                </router-link>
            </div>
            <div class="flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]" v-for="item in food.meals">
                <img :src="item.strMealThumb" alt="" srcset="" class="rounded-lg   w-full sm:h-[450px] 2xl:h-[500px]">
                <div class="flex flex-col gap-4">
                    <h2 class="text-[30px] md:text-[45px] detailhead">{{ item.strMeal }}</h2>
                    <div class="flex gap-4">
                        <router-link :to="/category/ + item.strCategory"  class="flex bg-[#394150] px-4 py-2 rounded-full gap-1">
                            <div>category:</div>
                            <div class="font-bold"> {{ item.strCategory }}</div>
                        </router-link>
                        <router-link :to="/area/ + item.strArea"  class="flex bg-[#394150] px-4 py-2 rounded-full gap-1">
                            <div>Area:</div>
                            <div class="font-bold">{{ item.strArea }}</div>
                        </router-link>
                    </div>
                </div>

                <!-- ingredients -->
                <div class="ingredients flex flex-col gap-5 px-2 md:px-0">
                    <div class="flex gap-4">
                        <button class="bg-[#FEBD2E] p-3 py-5 rounded-full"></button>
                        <h3 class="font-bold flex items-center text-[18px]">Ingredients</h3>
                    </div>
                    <ul class="list-disc px-[5%] flex flex-col gap-2 text-[18px]">
                        <li v-for="(ingredient, index) in filteredIngredients" :key="index">
                            {{ ingredient }}
                        </li>
                    </ul>
                </div>

                <div class="Instructions flex flex-col gap-5 px-2 md:px-0 pb-14">
                    <div class="flex gap-4">
                        <button class="bg-[#4E80EE] p-3 py-5 rounded-full"></button>
                        <h3 class="font-bold flex items-center text-[18px]">Instructions</h3>
                    </div>
                    <p class="text-[17px] instruct whitespace-pre-line">
                        {{ item.strInstructions }} 
                    </p>
                </div>
                
                <div>
                    <div>Video</div>
                    <!-- <router-link to="item.strYoutube">{{ item.strYoutube }}</router-link> -->
                    <a :href="item.strYoutube" target="_blank" v-if="item.strYoutube">
                        <div class="text-[#845EEE]">{{ item.strYoutube }}</div>
                    </a>
                    <div class="text-yellow-400" v-else>
                        Not Currently availlable!!!
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
/* .instruct{
    white-space: pre;
} */

</style>