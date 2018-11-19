<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/prod_search.gif">
            <template v-if="$route.query.brand === '50'" slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
            <template v-if="$route.query.brand === '40'" slot="brand"><img src="../assets/loomsource_logo.gif"></template>
            <template v-if="$route.query.brand === '21'" slot="brand"><img src="../assets/textus_logo.gif"></template>
        </heading>



        <div class="flex float-left">
            <img src="../assets/tabs/search_tabs_1-1.gif">
            <img src="../assets/tabs/search_tabs_1-2.gif">
            <img src="../assets/tabs/search_tabs_1-3.gif">
            <img src="../assets/tabs/search_tabs_1-4.gif">
            <img src="../assets/tabs/search_tabs_alt_5-5.gif">
            <img src="../assets/tabs/search_tabs_right.gif">
        </div>

        <slide-out-nav/>

        <div class="flex mt-8">
            <product-filters class="flex-no-shrink"/>
            <div class="flex flex-wrap w-full ml-16">
                <div class="w-1/5" v-for="collection in collections" v-bind:key="collection.collection_number">
                    <div class="flex flex-col items-center justify-center text-xxs">
                        <div>
                            <img :src="getDefaultColorway(collection)" style="width: 100px; height: 100px;">
                        </div>
                        <div class="leading-open">{{ collection.title }} {{ collection.collection_number}}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import SlideOutNav from "@/components/SlideOutNav.vue";
import ProductFilters from "./ProductFilters";
import jsonData from "../sampleData.json";

export default {
  components: {
    ProductFilters,
    Heading,
    SlideOutNav
  },
  data() {
    return {
      collections: jsonData.collections
    };
  },
  methods: {
    getDefaultColorway(collection) {
      const defaultColorway = collection.colorways.filter(function(colorway) {
        return colorway.colorway_number === collection.default_colorway;
      });
      return require("../assets/colorways/" + defaultColorway[0].thumb);
    }
  }
};
</script>
