<template>
    <div class="h-full flex flex-col">
        <heading><img src="../assets/who_we_are.gif"></heading>
        <div class="flex-1 flex">
            <momentum-textiles-nav/>
            <div class="flex-1 flex flex-col pt-6 overflow-y-auto overflow-x-hidden">
                <div style="min-height: min-content;">
                    <div class="text-grey-darker text-sm w-3/5 leading-loose">
                        The mission of Momentum Group is to create textiles that inspire and equip our customers to execute great work for their clients. We are individually and collectively committed to superior service and operational excellence.
                    </div>

                    <div class="mt-4">
                        <div class="font-bold">Core Values</div>
                        <ul>
                            <li class="-ml-4 mt-3">Fairness, honesty, and respect in all interactions</li>
                            <li class="-ml-4 mt-3">Advancing, developing, and hiring employee excellence</li>
                            <li class="-ml-4 mt-3"><router-link to="/environment" class="text-black hover:text-orange">Bettering the world around us</router-link></li>
                            <li class="-ml-4 mt-3">Reducing difficulties experienced by our customers</li>
                            <li class="-ml-4 mt-3">Increasing shareholder value</li>
                            <li class="-ml-4 mt-3">Continuous improvement of our products and services</li>
                        </ul>
                    </div>

                    <div class="mt-8" :style="'width:640px; height:1050px; background-image: url(' + require('@/assets/who_we_are_timeline.jpg') + ')'">
                        <div class="relative text-xxs" style="top: 149px; left: 424px; width: max-content;">
                            Community Involvement Action team<br>
                            initiated to coordinate volunteer<br>
                            efforts for all employees
                        </div>
                        <div class="relative text-xxs text-right" style="top: 178px; left: 66px; width: 200px; height:50px;">
                            <div class="font-bold">Industry First #1</div>
                            Hue was the first air jet<br>
                            textured recycled polyester
                        </div>
                    </div>

                    <div class="mb-16">
                        <div class="font-bold">Corporate Awards</div>
                        <ul>
                            <li class="-ml-4 mt-4">Malcolm Baldrige National Quality Award</li>
                            <li class="-ml-4 mt-4">Best Places to Work in Orange County <i>Orange County Business Journal</i></li>
                            <li class="-ml-4 mt-4">Best Employers in North Carolina <i>Business North Carolina</i></li>
                            <li class="-ml-4 mt-4">Top Workplaces <i>Orange County Register</i></li>
                            <li class="-ml-4 mt-4">American Graphic Design Award <i>Graphic Design USA</i></li>
                            <li class="-ml-4 mt-4">CDM “A” List <i>QualComm Honors Mobility at Work</i></li>
                            <li class="-ml-4 mt-4">Best Practices Award <i>Program Communication Center for Suggestion System Development</i></li>
                            <li class="-ml-4 mt-4">Vision Award <i>For Excellence in Business Performance Reporting Business Finance and Sage</i></li>
                            <li class="-ml-4 mt-4">Eureka Award – Silver Level <i>Small Services Best-in-Class California Council for Quality and Service</i></li>
                            <li class="-ml-4 mt-4">Sterling Award <i>Orange County Sterling Council</i></li>
                            <li class="-ml-4 mt-4">Eureka Award – Bronze Level <i>Small Services California Council for Quality and Service</i></li>
                        </ul>
                    </div>

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
