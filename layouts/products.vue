<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink class="font-bold" to="/">Nuxt Dojo</NuxtLink>
            </nav>
        </header>
        <!-- Output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink class="font-bold" to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="font-bold" to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="font-bold" to="/products">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>