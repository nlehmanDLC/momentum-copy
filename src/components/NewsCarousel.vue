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
  props: {
    articles: Array
  },
  data() {
    return {
      articleIndex: 0
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
