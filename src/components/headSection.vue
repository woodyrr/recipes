<script setup>
import headerButtons from './header1.vue'
import foot from '@/components/Footer.vue';
</script>
<template>
    <main class="flex flex-col overflow-hidden ">
        <headerButtons />
        <section class="flex flex-col gap-10 justify-center items-center text-white pt-28 text-[18px]">
            <div>
                No Availlable Info for this section currently.
            </div>
            <RouterLink to="/" class="flex justify-between p-2 bg-gray-500 rounded-md">
                Go back
            </RouterLink>
        </section>

    </main>
    
</template>