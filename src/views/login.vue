<script setup>
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const email = ref("")
const password = ref("")
const router =  useRouter()
const errorMsg = ref("")
 
const register = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("successfully signed in!");
            console.log(auth.currentUser)
            router.push('/home')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code){
                case "auth/invalid-email":
                    errorMsg.value = "invalid email";
                    break;
                case "auth/user-not-found":
                    errorMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errorMsg.value = "incorrect password";
                    break;
                default:
                    errorMsg.value = "Email or password was incorrect";
                    break;
            }
            
        })
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        router.push("/home")
    })
    .catch((error) => {

    })
};
</script>

<template>
    <div class=" flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4">
        <form @submit.prevent="login" class=" bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]">
            <div class="stepone w-[90%] flex flex-col gap-6 text-white  ">
                <div class="flex flex-col gap-6 text-white  p-[15px] " id="register">
                    <div class="flex justify-between">
                        <div class="text-[24px]">Login</div>

                        <div class="flex flex-col justify-center items-center gap-2">
                            <router-link to="/signup" class="text-[20px]  px-3 rounded-lg text-black  duration-300 bg-white">Sign Up</router-link>
                            <p class="text-[10px] ">Don't have an acount?</p>
                        </div>
                    </div>
                    
                    
                    <div class="flex flex-col gap-2 text-[#E5E7EB]">
                        <label for="Email" name="Email" class="text-[18px]">Email</label>
                        <!-- <div class="text-[14px]">Name</div> -->
                        <input v-model="email" type="text" id="Email" placeholder="Email" name="Email" class="Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]" required>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password" name="password" class="text-[18px]">Password</label>
                        <!-- <div class="text-[14px]">Email</div> -->
                        <input v-model="password" type="text" placeholder="password"  id="password"  class="password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]" required>
                    </div>
                </div>
                <p v-if="errorMsg">{{ errorMsg }}</p>
                <div class=" w-full flex flex-col items-center justify-center text-white gap-3">
                    <button @click="register" type="submit" class="btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2" >Submit</button>
                    <div>or</div>
                    <button @click="signInWithGoogle" type="submit" class="btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2" >Sign in with google</button>
                </div>
            </div>
        </form>
    </div>

   
</template>