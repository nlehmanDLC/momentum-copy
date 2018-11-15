<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/travel_journals.gif">
            <template slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <sina-pearson-nav/>
            <div class="flex-1 pt-6 overflow-y-auto">
                <div class="w-4/5 leading-open">
                    <div class="font-bold">Barcelona Journal</div>
                    <div class="mt-4">
                        Have you been to Barcelona? If so, you know what a great city it is. Located on the Mediterranean, capital of of the province of Catalonia, Barcelona has more in common with its neighbors to the east (France and Italy) than Spain. Barcelonians proudly speak only Catalan, which has Latin roots, while Spanish is based on Arabic origins. Barcelona is a city that for centuries has been caught in power struggles between tribes, royals, dictators or rebels. But now, it seems to have found its identity, and is enjoying every minute of it. Tourists flock here to enjoy the great weather and food (Tapas!), energetic nightlife and take in the Moderniste (early 1900's) architecture of Antoni Gaudi and his friends. We recently spent a week in Barcelona, and here are some of the marvelous sights we saw.
                    </div>
                    <div class="mt-4">
                        <img src="../assets/barcelona_01.jpg">
                    </div>

                    <div class="mt-4">
                        <div class="font-bold inline">La Boqueria: Everything From Almonds to Zucchinis</div> - One of the favorite tourist destinations is La Boqueria, Barcelona's biggest food market right off the Rambla. The stalls are filled with anything/everything fresh, edible and delicious. The stacks of brilliantly colored fruit and vegetables are inspiration for any textile design. Fortunately, the sellers are used to photographer tourists and are not bothered by our gawking.
                    </div>
                    <div class="mt-4">
                        <img src="../assets/barcelona_02.jpg">
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
  }
};
</script>

<style scoped>
</style>
