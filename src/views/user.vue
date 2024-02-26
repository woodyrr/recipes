<template>
    <div class=" flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4">
        <!-- <section class="bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]">
            <div>USERNAME</div>
            <input placeholder="Enter Name" type="text" class="border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]">
        </section> -->
        <div class="flex flex-col gap-2 text-[#E5E7EB]">
            <label for="username" name="username" class="text-[18px]">Name:</label>
            <!-- <div class="text-[14px]">Name</div> -->
            <input v-model="userName" type="text" id="Email" placeholder="Enter user name" name="username" class="border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]" required>
        </div>
    </div>
</template>

<script>
import db from'../firebase.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query} from "firebase/firestore"; 

export default {

}
</script>

<script setup>
import { ref } from 'vue';
const userName = ref('')
</script>