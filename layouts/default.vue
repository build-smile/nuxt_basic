<template>
    <div>
        <header class="shadow-sm  bg-teal-500">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink class="font-bold" to="/">
                    <img class=" w-8" src="../assets/image/BY.png" alt="">
                </NuxtLink>
                <ul class="flex gap-4 justify-center text-white font-serif">
                    <li>
                        <NuxtLink class=" justify-items-center"  to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                   
                    
                </ul>
                <!-- <a href="/about">normal link -- about page</a> -->
            </nav>
        </header>
        <!-- Output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #000000;
}
</style>

