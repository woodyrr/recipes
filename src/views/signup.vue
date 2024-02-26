<script setup>
import { reactive, onMounted, ref } from 'vue';
import  home  from "../components/home.vue";
import { useRouter, RouterLink } from 'vue-router';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged} from "firebase/auth";
// import db from'../firebase.js';
// import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query} from "firebase/firestore"; 
const email = ref("")
const password = ref("")
const router =  useRouter()
const userName = ref("")

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value )
        .then((data) => {
            console.log("successfully registered!");
            displayNames()
            router.push('/home')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message)
        })
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        // console.log(result.user);
        displayNames()
        router.push("/home")
    })
    .catch((error) => {

    })
};




const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     console.log(user)
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });



function displayNames(){
    updateProfile(auth.currentUser, {
        displayName: userName.value
        })
        .then(() => {
        // Profile updated!
        // ...
        // console.log('profile updated')
        })
        .catch((error) => {
        // An error occurred
        // ...
        console.log('Public profile Not created')
    });
}

</script>



<template>
    <div class=" flex flex-col justify-center px-[5%] md:px-[25%] pt-[15%] 2xl:pt-[8%] gap-4">
        <form @submit.prevent="login" class=" bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]">
            <div class="stepone w-[90%] flex flex-col gap-6 text-white  ">
                <div class="flex flex-col gap-6 text-white  p-[15px] " id="register">
                    <div class="flex justify-between">
                        <div class="text-[24px]">Create an Account</div>
                        <!-- <div>or</div> -->
                        <div class="flex flex-col justify-center items-center gap-2">
                            <router-link to="/Login" class="text-[20px]  px-3 rounded-lg text-black  duration-300 bg-white">Sign in</router-link>
                            <p class="text-[10px] ">already have an acount?</p>
                        </div>
                       
                    </div>
                    
                    <div class="flex flex-col gap-2 text-[#E5E7EB]">
                        <label for="Email" class="text-[18px]">Email</label>
                        <input v-model="email" type="text" placeholder="Email" name="Email"  class="Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]" required>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-[18px]">Password</label>
                        <input v-model="password" type="text" placeholder="password" name="Password" id="password"  class="password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]" required>
                    </div>

                    <div class="flex flex-col gap-2 text-[#E5E7EB]">
                        <label for="username" name="username" class="text-[18px]">User name</label>
                        <!-- <div class="text-[14px]">Name</div> -->
                        <input v-model="userName" type="text" id="username" placeholder="Enter user name" name="username" class="border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]" required>
                    </div>
                </div>
                <div class=" w-full flex flex-col items-center justify-center text-white gap-3">
                    <button @click="register" type="submit" class="btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2" >Submit</button>
                    <div>or</div>
                    <button @click="signInWithGoogle" type="submit" class="btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2" >Sign in with google</button>
                </div>
            </div>
        </form>
    </div>
</template>