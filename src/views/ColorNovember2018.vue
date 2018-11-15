<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/color_stories.gif">
            <template slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
        </heading>
        <div class="flex-1 flex">
            <sina-pearson-nav/>
            <div class="flex-1 pt-6 overflow-y-auto">
                <div class="flex">
                    <div class="flex-no-shrink" style="width: 440px;">
                        <div>
                            <img src="../assets/color_story_2018_11.jpg">
                        </div>
                        <div class="flex flex-wrap">
                            <div class="mr-4 mt-2"><img src="../assets/cimperial_mohair-anthracite.jpg"></div>
                            <div class="mr-4 mt-2"><img src="../assets/cpalazzo_360-75_barberini.jpg"></div>
                            <div class="mr-4 mt-2"><img src="../assets/cillumina-willow.jpg"></div>
                            <div class="mr-4 mt-2"><img src="../assets/cmilano_359-81_solferino.jpg"></div>
                            <div class="mr-4 mt-2"><img src="../assets/cdomani_357-75_roma.jpg"></div>
                            <div class="mr-4 mt-2"><img src="../assets/clana-gossamer.jpg"></div>
                            <div class="mr-4 mt-2"><img src="../assets/clinq-graphite.jpg"></div>
                        </div>
                    </div>
                    <div class="mx-4">
                        <div class="font-bold">November 2018 - The Best of Italian Style: Cool Neutrals</div>
                        <div class="leading-open mt-4">
                            Our Italian Style collection celebrates the best of Italy's modern style in pattern and color. Sleek, refined and oh so chic, cool neutrals reign supreme in this month’s color story that celebrates the flavor of modernist Italian design. Larger scale Palazzo and its mid-scale complement Domani have random triangle patterns in a palette of light and dark greys and yellow green. Milano is a sleek sharkskin-looking upholstery fabric with a shimmery surface. We’ve combined these Sina Pearson favorites with a few of our notable Textus solid weaves: Linq, a classic wool epingle brings restrained texture; Lana, a polished worsted wool satin weave has an elegant luster; and Illumina offers the most sophisticated combination of sheen and color. Imperial Mohair completes the offering with its rich velvety hand. All are designed to make any workplace or hospitality interior the epitome of modern Italian style.
                        </div>
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
                        image: "color_story_2018_11_thumb.jpg",
                        title: "November 2018",
                        link: "color_story_november_2018"
                    },
                    {
                        image: "color_story_2018_10_thumb.jpg",
                        title: "October 2018",
                        link: "color_story_october_2018"
                    },
                    {
                        image: "color_story_2018_09_thumb.jpg",
                        title: "September 2018",
                        link: "color_story_september_2018"
                    },
                    {
                        image: "color_story_2018_08_thumb.jpg",
                        title: "August 2018",
                        link: "color_story_august_2018"
                    },
                    {
                        image: "color_story_2018_07_thumb.jpg",
                        title: "July 2018",
                        link: "color_story_july_2018"
                    },
                    {
                        image: "color_story_2018_06_thumb.jpg",
                        title: "June 2018",
                        link: "color_story_june_2018"
                    },
                    {
                        image: "color_story_2018_05_thumb.jpg",
                        title: "May 2018",
                        link: "color_story_may_2018"
                    },
                    {
                        image: "color_story_2018_04_thumb.jpg",
                        title: "April 2018",
                        link: "color_story_april_2018"
                    },
                    {
                        image: "color_story_2018_03_thumb.jpg",
                        title: "March 2018",
                        link: "color_story_march_2018"
                    },
                ]
            };
        }
    };
</script>

<style scoped>
</style>
