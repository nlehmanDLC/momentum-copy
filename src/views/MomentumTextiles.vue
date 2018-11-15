<template>
    <div class="h-full flex flex-col">
        <heading></heading>
        <div class="flex-1 flex">
            <momentum-textiles-nav/>
            <div class="flex-1 pt-6">
                <carousel :image-list="imageList"></carousel>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import MomentumTextilesNav from "@/components/MomentumTextilesNav.vue";
import Carousel from "../components/Carousel";
export default {
  components: {
    Carousel,
    Heading,
    MomentumTextilesNav
  },
  data() {
    return {
      imageList: [
        "wallcovering2_home.jpg",
        "tech_weave_home.jpg",
        "felderman_keatinge_01_home.jpg"
      ]
    };
  }
};
</script>

<style scoped>
</style>
