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
            // console.log(auth.currentUser)
            // if (acct != null) {
            //     const personName = acct.getDisplayName();
            //     const personFamilyName = acct.getFamilyName();
            //     const personGivenName = acct.getGivenName();
            //     const personEmail = acct.getEmail();
            //     const personId = acct.getId();
            //     const personPhoto = acct.getPhotoUrl();
            // }
            
            router.push('/home')
            // console.log(auth.currentUser.uid)
            // getAuth()
            // .getUser(auth.currentUser.uid)
            // .then((userRecord) => {
            //     // See the UserRecord reference doc for the contents of userRecord.
            //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
            // })
            // .catch((error) => {
            //     console.log('Error fetching user data:', error);
            // });
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

// if (acct != null) {
//   String personName = acct.getDisplayName();
//   String personGivenName = acct.getGivenName();
//   String personFamilyName = acct.getFamilyName();
//   String personEmail = acct.getEmail();
//   String personId = acct.getId();
//   Uri personPhoto = acct.getPhotoUrl();
// }
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        // console.log(result.user);
        router.push("/home")
    })
    .catch((error) => {

    })
};

let guestEmail = 'testdemo@gmail.com'
let guestPassword = 'Welcome1'

let copy1 =  () =>{
    navigator.clipboard.writeText(guestEmail);
    alert('Email copied to clipboard');
}
let copy2 =  () =>{
    navigator.clipboard.writeText(guestPassword);
    alert('password copied to clipboard');
}
</script>

<template>
    <div class=" flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] md:pt-[15%] lg:pt-[10%] 2xl:pt-[10%] gap-4">
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
                        <input v-model="password" type="text" placeholder="password"  id="password"  class="password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]" required>
                    </div>
                </div>
                <p v-if="errorMsg">{{ errorMsg }}</p>
                <section class="guest flex gap-4 px-[15px]">
                    <h2 class="text-yellow-400 font-bold text-lg">Guest:</h2>
                    <div class="flex flex-col">
                        <div class="flex items-center gap-2 text-[#fffefe]">
                            <div>Email</div>
                            <button @click="copy1">
                                <img src="../assets/link.svg" class=" h-5 lg:h-6">
                            </button>
                        </div>
                        <div class="flex items-center gap-2 text-[#fffefe]">
                            <div>password</div>
                            <button @click="copy2" >
                                <img src="../assets/link.svg" class=" h-5 lg:h-6 ">
                            </button>
                        </div>
                    </div>
                    
                </section>
                <div class=" w-full flex flex-col items-center justify-center text-white gap-3">
                    <button @click="register" type="submit" class="btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2" >Submit</button>
                    <div>or</div>
                    <button @click="signInWithGoogle" type="submit" class="btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2" >Sign in with google</button>
                </div>
            </div>
        </form>
    </div>

   
</template>