import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import details from '../views/details.vue'
// import ldetails from '../views/Ldetails.vue'
import categories from '../components/categoryDetails.vue'
// import lcategories from '../components/LcategoryDetails.vue'
// import lcategories from '../components/LcategoryDetails.vue'
import area from '../views/areadetails.vue'
// import larea from '../views/Lareadetails.vue'
import loggedin from '../views/login.vue'
// import search from '../views/search.vue'
import sign from '../views/signup.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name:'home',
      component:home,
      meta: {
        requiresAuth:true,

      },
    },
    {
      path: '/meals/:id',
      name:'meal Details',
      component:details
    },
    // {
    //   path: '/lmeals/:id',
    //   name:'lmeal Details',
    //   component:ldetails
    // },
    // {
    //   path: '/larea/:id',
    //   name:'logged meal Details',
    //   component:larea
    // },
    {
      path: '/category/:id',
      name:'category Details',
      component:categories
    },
    // {
    //   path: '/lcategory/:id',
    //   name:'logged category Details',
    //   component:lcategories
    // },
    {
      path: '/area/:id',
      name:'area Details',
      component:area
    },
    {
      path: '/',
      name:'loggedin',
      component:loggedin
    },
    {
      path: '/signup',
      name:'signUp',
      component:sign
    },
    // {
    //   path: '/search',
    //   name:'search',
    //   component:search,
    //   meta: {
    //     requiresAuth:true,

    //   },
    // },
    
  ],
});

const getCurrentUsers = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)){
    if ( await getCurrentUsers()){
      next();
    }
    else{
      alert("You dont have access")
      next("/");
    }
  }else {
    next();
  }
})
export default router
