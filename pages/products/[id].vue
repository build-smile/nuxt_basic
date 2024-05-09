<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</title>
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>
ุ
<script setup>
import { useRoute } from 'vue-router';

const { id } = useRoute().params
definePageMeta({
    layout: "products"
})
const url = `https://fakestoreapi.com/products/${id}`
const { data: product } = await useFetch(url, { key: 'id' })
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found',fatal:true })
}

</script>

<style scoped></style>