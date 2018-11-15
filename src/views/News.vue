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
          title: "news_dlcouch_eykon_tri-kes_text.gif",
          shortTitle: "D.L.Couch, Eykon and TRI-KES",
          mainImage: "joanna_gaines_magnolia_news.jpg",
          thumbImage: "joanna_gaines_news_thum.jpg",
          link: "dlcouch_eykon_tri-kes_pr"
        },
        {
          title: "news_baldrige_award_text.gif",
          shortTitle: "Malcolm Baldrige Quality Award",
          mainImage: "baldrige_award.jpg",
          thumbImage: "baldrige_award_news_thum.jpg",
          link: "malcolm_baldrige_award_pr"
        },
        {
          title: "news_tesla_winner_text.gif",
          shortTitle: "Tesla Giveaway",
          mainImage: "tesla_winner_crop.jpg",
          thumbImage: "tesla_winner_news_thum.jpg",
          link: "tesla_winner_pr"
        },
        {
          title: "news_5clicks_text.gif",
          shortTitle: "5 Clicks Pre-approvals",
          mainImage: "5clicks_news.jpg",
          thumbImage: "5clicks_news_thum.jpg",
          link: "5_clicks"
        },
        {
          title: "news_solar_text.gif",
          shortTitle: "Net Energy Producer",
          mainImage: "solar_panels_01.jpg",
          thumbImage: "solar_panels_02_thum.jpg",
          link: "solar_irvine_pr"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
