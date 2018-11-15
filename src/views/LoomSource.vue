<template>
    <div class="h-full flex flex-col">
        <heading>
            <template slot="brand"><img src="../assets/loomsource_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <loom-source-nav/>
            <div class="flex-1 pt-6">
                <carousel :image-list="imageList"></carousel>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import LoomSourceNav from "@/components/LoomSourceNav.vue";
import Carousel from "../components/Carousel";
export default {
  components: {
    Carousel,
    Heading,
    LoomSourceNav
  },
  data() {
    return {
      imageList: [
        "charmed_01_home.jpg",
        "charcoal_and_stone_02_home.jpg",
        "charcoal_and_stone_01_home.jpg"
      ]
    };
  }
};
</script>

<style scoped>
</style>
