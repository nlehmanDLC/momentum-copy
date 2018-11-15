<template>
    <div class="h-full flex flex-col">
        <heading>
            <template slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <sina-pearson-nav/>
            <div class="flex-1 pt-6">
                <carousel :image-list="imageList"></carousel>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import SinaPearsonNav from "@/components/SinaPearsonNav.vue";
import Carousel from "../components/Carousel";
export default {
  components: {
    Carousel,
    Heading,
    SinaPearsonNav
  },
  data() {
    return {
      imageList: [
        "textus_collection_01_home.jpg",
        "textus_collection_02_home.jpg",
        "palm_springs_weekend_home.jpg"
      ]
    };
  }
};
</script>

<style scoped>
</style>
