<template>
    <div>
        <div class="flex">
            <div>
                <img :src="require('../assets/' + currentArticle.mainImage)">
            </div>
            <div class="ml-3">
                <img :src="require('../assets/' + currentArticle.title)">
                <div class="mt-8">
                    <router-link to="/" class="text-orange no-underline">read more [>]</router-link>
                </div>
            </div>
        </div>

        <hr class="border-grey border-b mt-4">

        <div class="flex">
            <div v-for="(article, index) in articles" class="p-3 group">
                <div :class="{'opacity-100': index === articleIndex, 'opacity-50': index !== articleIndex}" class="opacity-50 group-hover:opacity-100">
                    <a href="#" @click.prevent="articleIndex = index">
                        <img :src="require('../assets/' + article.thumbImage)">
                    </a>
                </div>
                <div class="w-24">
                    <a href="#" @click.prevent="articleIndex = index" class="text-xxs text-grey group-hover:text-black no-underline">
                        {{ article.shortTitle }}
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      articleIndex: 0,
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
  },

  computed: {
    currentArticle() {
      return this.articles[this.articleIndex];
    }
  },

  created() {
    setTimeout(() => this.loadNextArticle(), 8000);
  },

  methods: {
    loadNextArticle() {
      if (this.articleIndex >= this.articles.length - 1) {
        this.articleIndex = 0;
      } else {
        this.articleIndex++;
      }

      setTimeout(this.loadNextArticle, 8000);
    }
  }
};
</script>

<style scoped>
</style>
