<template>
    <div class="h-full flex flex-col">
        <heading><img src="../assets/news.gif"></heading>
        <div class="flex-1 flex">
            <momentum-textiles-nav/>
            <div class="flex-1 pt-6">
                <news-carousel></news-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import MomentumTextilesNav from "@/components/MomentumTextilesNav.vue";
import NewsCarousel from "@/components/NewsCarousel.vue";
export default {
  components: {
    Heading,
    MomentumTextilesNav,
    NewsCarousel
  }
};
</script>

<style scoped>
</style>
