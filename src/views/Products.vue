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
            <product-filters :filters="filters" class="flex-no-shrink"/>
            <div class="flex flex-wrap w-full ml-16">
                <div class="w-1/5" v-for="collection in filteredCollections" v-bind:key="collection.collection_number">
                    <div class="flex flex-col items-center justify-center text-xxs mb-4">
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
      collections: jsonData.collections,
      filters: {
        upholstery: 1,
        crypton: 0,
        coated: 0,
        bleach_cleanable: 0,
        outdoor: 0,
        price: {}
      }
    };
  },
  computed: {
    filteredCollections: function() {
      return this.collections.filter(function(collection) {
        if (this.filters.crypton && !collection.crypton) {
          return false;
        }

        if (this.filters.coated && !collection.coated) {
          return false;
        }

        if (this.filters.bleach_cleanable && !collection.bleach_cleanable) {
          return false;
        }

        if (this.filters.solid && !collection.solid) {
          return false;
        }

        if (this.filters.stripe && !collection.stripe) {
          return false;
        }

        if (this.filters.geometric && !collection.geometric) {
          return false;
        }

        if (this.filters.organic && !collection.organic) {
          return false;
        }

        if (this.filters.random_style && !collection.random_style) {
          return false;
        }

        if (this.filters.price.under30 && collection.net_price >= 30) {
          return false;
        }

        if (
          this.filters.price.between30and60 &&
          (collection.net_price < 30 || collection.net_price > 60)
        ) {
          return false;
        }

        if (this.filters.price.over60 && collection.net_price <= 60) {
          return false;
        }

        if (this.filters.durability50k && collection.durability < 50000) {
          return false;
        }

        if (this.filters.durability100k && collection.durability < 100000) {
          return false;
        }

        return !(this.filters.outdoor && !collection.outdoor);
      }, this);
    }
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
