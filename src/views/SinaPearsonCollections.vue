<template>
    <div class="h-full flex flex-col">
        <heading>
            <template slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <sina-pearson-nav/>
            <div class="flex-1 pt-6">
                <news-carousel :articles="articles"></news-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import SinaPearsonNav from "@/components/SinaPearsonNav.vue";
import NewsCarousel from "@/components/NewsCarousel.vue";
export default {
  components: {
    Heading,
    SinaPearsonNav,
    NewsCarousel
  },
  data() {
    return {
      articles: [
        {
          title: "news_palm_springs_weekend_text.gif",
          shortTitle: "Palm Springs Weekend",
          mainImage: "palm_springs_weekend_01.jpg",
          thumbImage: "palm_springs_weekend_collection_news_thumb.jpg",
          link: "palm_springs_weekend_collection_pr"
        },
        {
          title: "news_textus_collection_text.gif",
          shortTitle: "Textus Collection",
          mainImage: "textus_collection_03.jpg",
          thumbImage: "textus_collection_news_thumb.jpg",
          link: "textus_collection_pr"
        },
        {
          title: "news_hi-tech_overshot_text.gif",
          shortTitle: "Hi-Tech Overshot Collection",
          mainImage: "hi-tech_overshot_01.jpg",
          thumbImage: "hi-tech_overshot_collection_01_news_thumb.jpg",
          link: "hi_tech_overshot_collection_pr"
        },
        {
          title: "news_crypton2_text.gif",
          shortTitle: "Crypton® 2.0",
          mainImage: "crypton2_01.jpg",
          thumbImage: "crypton2_collection_01_news_thumb.jpg",
          link: "crypton2_collection_pr"
        },
        {
          title: "news_island_text.gif",
          shortTitle: "Island",
          mainImage: "island_collection.jpg",
          thumbImage: "island_news_thum.jpg",
          link: "island_collection"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
