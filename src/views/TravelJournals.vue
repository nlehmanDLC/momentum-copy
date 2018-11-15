<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/travel_journals.gif">
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
          image: "barcelona_1992_thumb.jpg",
          title: "Barcelona",
          link: "travel_journal_barcelona"
        },
        {
          image: "berlin_0208_thumb.jpg",
          title: "Berlin",
          link: "travel_journal_berlin"
        },
        {
          image: "copenhagen_2135_thumb.jpg",
          title: "Copenhagen",
          link: "travel_journal_copenhagen"
        },
        {
          image: "helsinki_18_041_41-2_thumb.jpg",
          title: "Helsinki",
          link: "travel_journal_helsinki"
        },
        {
          image: "iceland_4689_thumb.jpg",
          title: "Iceland",
          link: "travel_journal_iceland"
        },
        {
          image: "istanbul_6078_thumb.jpg",
          title: "Istanbul",
          link: "travel_journal_istanbul"
        },
        {
          image: "kyoto_1108_thumb.jpg",
          title: "Kyoto",
          link: "travel_journal_kyoto"
        },
        {
          image: "stockholm1_1072_72_thumb.jpg",
          title: "Stockholm",
          link: "travel_journal_stockholm"
        },
        {
          image: "tokyo_2754_thumb.jpg",
          title: "Tokyo",
          link: "travel_journal_tokyo"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
