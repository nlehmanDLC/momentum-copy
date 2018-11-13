<template>
    <div>
        <img class="mt-20" :src="getImage()"/>
    </div>
</template>

<script>
    export default {
        methods: {
            getImage() {
                let randomImage = Math.floor(Math.random() * 4) + 1;
                return require('../assets/chicago_2015_0' + randomImage + '.jpg');
            }
        },
    }
</script>

<style scoped>

</style>