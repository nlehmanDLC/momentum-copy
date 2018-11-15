<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/press.gif">
            <template slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <sina-pearson-nav/>
            <div class="flex-1 pt-6 overflow-y-auto">
                <div class="flex flex-wrap">
                    <div v-for="story in stories" class="mx-3 my-2">
                        <router-link :to="'/' + story.link">
                            <img :src="require('../assets/' + story.image)">
                        </router-link>
                    </div>
                </div>
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
  },
  data() {
    return {
      stories: [
        {
          image: "201701_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201622_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201621_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201620_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201619_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201618_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201617_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201615_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201616_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201614_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201613_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201612_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201611_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "201610_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "20169_sm.jpg",
          link: "sp_pr_2017_01"
        },
        {
          image: "20168_sm.jpg",
          link: "sp_pr_2017_01"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
