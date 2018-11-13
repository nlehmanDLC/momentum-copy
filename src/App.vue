<template>
    <div id="app" class="container bg-white mx-auto p-6" style="width:900px; height:600px;">
        <div class="flex flex-col h-full">
            <div class="h-16"></div>
            <div class="flex items-baseline">
                <div style="width: 180px;">
                    <img alt="Momentum Group" src="./assets/momgrp_logo_orange.gif" style="width:160px; height:26px;">
                </div>
                <div class="font-sans text-grey-dark text-sm leading-normal text-justify" style="width: 550px;">
                    Momentum Group is one of the nation’s leading creators of <a href="#" class="text-green no-underline">sustainable</a> contract textiles. It is the tie
                    that binds four innovators in the textile design industry:
                    <a href="#" class="text-grey-darker hover:text-orange no-underline">Sina Pearson</a>,
                    <a href="#" class="text-grey-darker hover:text-orange no-underline">Momentum Textiles</a>,
                    <a href="#" class="text-grey-darker hover:text-orange no-underline">LoomSource</a>
                    and
                    <a href="#" class="text-grey-darker hover:text-orange no-underline">Textus</a>.
                </div>
            </div>
            <div class="flex h-full">
                <div style="width:180px;" class="flex items-end">
                    <div class="flex flex-col">
                        <a href="#" class="font-sans text-smm leading-open text-orange no-underline">Sina Pearson</a>
                        <a href="#" class="font-sans text-smm leading-open text-orange no-underline">Momentum Textiles</a>
                        <a href="#" class="font-sans text-smm leading-open text-orange no-underline">LoomSource</a>
                        <a href="#" class="font-sans text-smm leading-open text-orange no-underline">Textus</a>
                    </div>
                </div>
                <div>
                    <carousel></carousel>
                </div>
            </div>
            <div class="flex mt-3 -mb-3">
                <div style="width:172px;" class="border-t border-grey mr-2"></div>
                <div class="flex border-t border-grey pt-2 w-full">
                    <a href="#" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Who We Are</a>
                    <a href="#" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">News</a>
                    <a href="#" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Awards</a>
                    <a href="#" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Terms & Conditions</a>
                    <a href="#" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Contact Us</a>
                    <a href="#" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Return Samples</a>
                    <a href="#" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">FAQ</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Carousel from "./components/Carousel.vue";

    export default {
        name:       "app",
        components: {
            Carousel
        }
    };
</script>

<style>
</style>
