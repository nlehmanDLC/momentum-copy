<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/prod_detail.gif">
            <template v-if="pattern.brand === 50" slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
            <template v-if="pattern.brand === 40" slot="brand"><img src="../assets/loomsource_logo.gif"></template>
            <template v-if="pattern.brand === 21" slot="brand"><img src="../assets/textus_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <sina-pearson-nav v-if="pattern.brand === 50"/>
            <momentum-textiles-nav v-if="pattern.brand === 81"/>
            <loom-source-nav v-if="pattern.brand === 40"/>
            <textus-nav v-if="pattern.brand === 21"/>
            <div class="pt-6 flex flex-col">
                <div class="flex">
                    <div><img :src="require('../assets/colorways/' + colorway.image)"></div>
                    <div class="flex flex-col">
                        <div class="ml-2 mb-3">
                            <a href="#"><img src="../assets/icon_add.png"></a>
                        </div>
                        <div class="ml-2 mb-3">
                            <a href="#"><img src="../assets/icon_fav.png"></a>
                        </div>
                        <div class="ml-2 mb-3">
                            <a href="#"><img src="../assets/icon_email.png"></a>
                        </div>
                        <div class="ml-2 mb-3">
                            <a href="#"><img src="../assets/icon_print.png"></a>
                        </div>
                        <div class="ml-2 mb-3">
                            <a href="#"><img src="../assets/icon_downloads.png"></a>
                        </div>
                        <div class="ml-2 mb-3">
                            <a href="#"><img src="../assets/icon_zoom.png"></a>
                        </div>
                    </div>
                </div>
                <div class="border-t border-grey flex mt-10 leading-open pt-2">
                    <router-link to="/" class="no-underline text-orange mr-4">availability [>]</router-link>
                    <router-link to="/" class="no-underline text-orange mr-4">pre-approvals [>]</router-link>
                    <router-link to="/" class="no-underline text-orange mr-4">cleaning guide [>]</router-link>
                </div>
            </div>

            <div class="pt-6 ml-10 flex-1 flex flex-col mr-6">
                <div class="text-sm font-bold border-grey border-b pb-3">
                    {{ pattern.title }} {{ pattern.collection_number }} - {{ colorway.colorway_number }} {{ colorway.title }}
                </div>
                <div class="flex flex-wrap mt-2" style="height: 215px;">
                    <div v-for="patternColorway in pattern.colorways" class="mr-1 mb-1">
                        <img :src="require('../assets/colorways/' + patternColorway.thumb)" v-on:click="changeColorway(patternColorway)">
                    </div>
                </div>
                <div class="border-grey border-t mt-2 flex text-grey-darker text-xxs pt-1">
                    <div>
                        <span class="font-bold">Repeat</span> (full repeat shown)
                        <div>3-5/8" L</div>
                    </div>
                    <div class="ml-4">
                        <div class="font-bold">Net Price</div>
                        <div>$12.50</div>
                    </div>
                </div>
                <div class="border-grey border-t mt-2 flex text-grey-darker text-xxs pt-1">
                    <div>
                        <div class="font-bold">Content</div>
                        <div>76% Polyester; 24% Cotton</div>
                    </div>
                </div>
                <div class="border-grey border-t mt-2 flex text-green text-xxs pt-1">
                    <div>
                        <div class="font-bold">Reduced Environment Impact</div>
                        <div>GREENGUARD Gold Certified</div>
                    </div>
                </div>
                <div class="border-grey border-t flex items-center pt-1" style="margin-top: 60px;">
                    <div class="mr-1"><img src="../assets/actfire.gif"></div>
                    <div class="mr-1"><img src="../assets/actlgabrasion.gif"></div>
                    <div class="mr-1"><img src="../assets/actsun.gif"></div>
                    <div class="mr-1"><img src="../assets/actcolorpalette.gif"></div>
                    <div class="mr-1"><img src="../assets/actstar.gif"></div>
                    <a href="#" class="no-underline text-orange ml-5"> complete specs [>]</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import SinaPearsonNav from "../components/SinaPearsonNav";
import MomentumTextilesNav from "../components/MomentumTextilesNav";
import LoomSourceNav from "../components/LoomSourceNav";
import TextusNav from "../components/TextusNav";
import jsonData from "../sampleData.json";
import router from "../router";

export default {
  components: {
    TextusNav,
    LoomSourceNav,
    MomentumTextilesNav,
    SinaPearsonNav,
    Heading
  },
  data() {
    return {
      collections: jsonData.collections
    };
  },
  computed: {
    pattern() {
      return this.collections.filter(function(pattern) {
        return (
          pattern.collection_number === parseInt(this.$route.params.patternId)
        );
      }, this)[0];
    },
    colorway() {
      return this.pattern.colorways.filter(function(colorway) {
        return (
          colorway.colorway_number === parseInt(this.$route.params.colorwayId)
        );
      }, this)[0];
    }
  },
  methods: {
    changeColorway(patternColorway) {
      router.push({
        name: "pattern",
        params: {
          patternId: this.$route.params.patternId,
          colorwayId: patternColorway.colorway_number
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
