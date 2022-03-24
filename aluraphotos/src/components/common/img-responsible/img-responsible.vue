<template>
    <img class="image-responsible" :src="url" :alt="title">
</template>

<script>

export default {
    props: ['url', 'title']
}

</script>

<style scoped>
    .image-responsible {
        width: 100%;
    }
</style>