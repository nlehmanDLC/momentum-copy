<template>
    <div class="h-full flex flex-col">
        <heading><img src="../assets/news.gif"></heading>
        <div class="flex-1 flex">
            <momentum-textiles-nav/>
            <div class="flex-1 pt-6">
                <news-carousel :articles="articles"></news-carousel>
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
  },
  data() {
    return {
      articles: [
        {
          title: "news_felderman_keatinge_collection_text.gif",
          shortTitle: "Felderman Keatinge",
          mainImage: "felderman_keatinge_01.jpg",
          thumbImage: "felderman_keatinge_news_thum.jpg",
          link: "felderman_keatinge_collection_pr"
        },
        {
          title: "news_color_600_text.gif",
          shortTitle: "Color 600",
          mainImage: "color_600_01.jpg",
          thumbImage: "color_600_news_thum.jpg",
          link: "color_600_pr"
        },
        {
          title: "news_tech_weave_text.gif",
          shortTitle: "Tech Weave",
          mainImage: "tech_weave_01.jpg",
          thumbImage: "tech_weave_news_thum.jpg",
          link: "graphic_collection_pr"
        },
        {
          title: "news_propel_text.gif",
          shortTitle: "Propel Collection",
          mainImage: "propel_01.jpg",
          thumbImage: "propel_news_thum.jpg",
          link: "propel_collection_pr"
        },
        {
          title: "news_endurance_epu_text.gif",
          shortTitle: "Endurance EPU™",
          mainImage: "epu_stack.jpg",
          thumbImage: "endurance_epu_news_thum2.jpg",
          link: "endurance_epu_all_pr"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
