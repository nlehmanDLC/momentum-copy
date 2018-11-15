<template>
    <div class="h-full flex flex-col">
        <heading>
            <template slot="brand"><img src="../assets/textus_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <textus-nav/>
            <div class="flex-1 pt-6">
                <carousel :image-list="imageList"></carousel>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import TextusNav from "@/components/TextusNav.vue";
import Carousel from "../components/Carousel";
export default {
  components: {
    Carousel,
    Heading,
    TextusNav
  },
  data() {
    return {
      imageList: ["prato_woven_felt_home.jpg"]
    };
  }
};
</script>

<style scoped>
</style>
