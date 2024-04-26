<template>
    <div>
        <p>produvt detail for {{ id  }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque amet labore cupiditate, voluptas ullam enim velit. Voluptatibus debitis minus quaerat beatae, cupiditate eveniet commodi. Eos eligendi dignissimos totam harum!</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

    const {id} = useRoute().params
</script>

<style scoped>

</style>