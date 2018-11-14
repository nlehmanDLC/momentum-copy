<template>
    <div class="h-full flex flex-col">
        <heading><img src="../assets/awards.gif"></heading>
        <div class="flex-1 flex">
            <momentum-textiles-nav/>
            <div class="flex-1 pt-6 flex">
                <div class="flex-no-shrink">
                    <img src="../assets/baldrige_award.jpg">
                </div>
                <div class="ml-3 overflow-y-auto">
                    <div class="font-bold">Corporate Awards</div>
                    <div class="my-4">Malcolm Bladrige National Quality Award</div>
                    <div class="my-4">BestPlaces to Work in Orange County <i>Orange County Business Journal</i></div>
                    <div class="my-4">Best Employers in North Carolina <i>Business North Carolina</i></div>
                    <div class="my-4">Top Workplaces <i>Orange County Register</i></div>
                    <div class="my-4">American Graphic Design Award <i>Graphic Design USA</i></div>
                    <div class="my-4">CDM “A” List <i>QualComm Honors Mobility at Work</i></div>
                    <div class="my-4">Best Practices Award <i>Program Communication Center for Suggestion System Development</i></div>
                    <div class="my-4">Vision Award <i>For Excellence in Business Performance Reporting Business Finance and Sage</i></div>
                    <div class="my-4">Eureka Award – Silver Level <i>Small Services Best-in-Class California Council for Quality and Service</i></div>
                    <div class="my-4">Sterling Award <i>Orange County Sterling Council</i></div>
                    <div class="my-4">Eureka Award – Bronze Level <i>Small Services California Council for Quality and Service</i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import MomentumTextilesNav from "@/components/MomentumTextilesNav.vue";
export default {
  components: {
    Heading,
    MomentumTextilesNav
  }
};
</script>

<style scoped>
</style>
