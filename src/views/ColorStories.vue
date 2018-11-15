<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/color_stories.gif">
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
                        <div>{{ story.title }}</div>
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
          image: "color_story_2018_11_thumb.jpg",
          title: "November 2018",
          link: "color_story_november_2018"
        },
        {
          image: "color_story_2018_10_thumb.jpg",
          title: "October 2018",
          link: "color_story_october_2018"
        },
        {
          image: "color_story_2018_09_thumb.jpg",
          title: "September 2018",
          link: "color_story_september_2018"
        },
        {
          image: "color_story_2018_08_thumb.jpg",
          title: "August 2018",
          link: "color_story_august_2018"
        },
        {
          image: "color_story_2018_07_thumb.jpg",
          title: "July 2018",
          link: "color_story_july_2018"
        },
        {
          image: "color_story_2018_06_thumb.jpg",
          title: "June 2018",
          link: "color_story_june_2018"
        },
        {
          image: "color_story_2018_05_thumb.jpg",
          title: "May 2018",
          link: "color_story_may_2018"
        },
        {
          image: "color_story_2018_04_thumb.jpg",
          title: "April 2018",
          link: "color_story_april_2018"
        },
        {
          image: "color_story_2018_03_thumb.jpg",
          title: "March 2018",
          link: "color_story_march_2018"
        },
      ]
    };
  }
};
</script>

<style scoped>
</style>
