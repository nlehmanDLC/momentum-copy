<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/press.gif">
            <template slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <sina-pearson-nav/>
            <div class="flex-1 pt-6 overflow-y-auto">
                <div class="font-bold">Metropolis, September 5, 2017</div>
                <img src="../assets/201701_cover_lg.jpg" class="mt-5">
                <img src="../assets/201701-1_lg.jpg" class="mt-5">
                <img src="../assets/201701-2_lg.jpg" class="mt-5">
                <img src="../assets/201701-3_lg.jpg" class="mt-5">
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import SinaPearsonNav from "@/components/SinaPearsonNav.vue";
export default {
  components: {
    Heading,
    SinaPearsonNav
  }
};
</script>

<style scoped>
</style>
