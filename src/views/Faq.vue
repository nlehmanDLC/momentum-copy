<template>
    <div class="h-full flex flex-col">
        <heading><img src="../assets/faq.gif"></heading>
        <div class="flex-1 flex">
            <momentum-textiles-nav/>
            <div class="flex-1 pt-6 overflow-y-auto">
                <div class="font-bold">Product FAQ</div>
                <ul class="mt-6">
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">What in-line finishes are available for Momentum Group fabrics?</router-link>
                    </li>
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">What custom finishes are available for Momentum Group fabrics?</router-link>
                    </li>
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">Which products are recommended for high-demand and high-use projects?</router-link>
                    </li>
                </ul>

                <div class="w-3/5 mt-5">
                    <hr class="border-grey border-b">
                </div>

                <div class="font-bold mt-8">How-to Videos</div>
                <ul class="mt-6">
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">How do I order memo samples?</router-link>
                    </li>
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">How do I find fabrics pre-approved or graded-in by a manufacturer?</router-link>
                    </li>
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">How do I save fabrics to my favorites?</router-link>
                    </li>
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">How do I search for fabrics?</router-link>
                    </li>
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">How do I view complete product specs?</router-link>
                    </li>
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">How do I create a login?</router-link>
                    </li>
                    <li class="mb-3">
                        <router-link to="/" class="no-underline text-orange">How do I retrieve my user ID and/or password?</router-link>
                    </li>
                </ul>

                <div class="w-3/5 mt-5">
                    <hr class="border-grey border-b">
                </div>

                <div class="w-3/5 mt-6">
                    <div class="flex items-start">
                        <div>
                            <div class="font-bold">Association for Contract Textiles</div>
                            <div class="mt-4 leading-open">A professional, not-for-profit trade association founded in 1985, the <a class="text-orange no-underline" href="http://www.contracttextiles.org" target="_blank">Association for Contract Textiles</a> a serves as a forum for companies involved in the design, development, production and promotion of textiles for commercial interiors. As an information hub and industry advocate, <a class="text-orange no-underline" href="http://www.contracttextiles.org" target="_blank">ACT</a> provides voluntary performance and sustainability guidelines and educational CEUs to engage the greater design community.</div>
                        </div>
                        <div class="flex-no-shrink ml-10">
                            <img src="../assets/act_logo_100.png" width="100" height="148">
                        </div>
                    </div>
                </div>

                <div class="w-3/5 mt-5">
                    <hr class="border-grey border-b">
                </div>

                <div class="w-3/5">
                    <div class="font-bold mt-8">Tech Tips</div>

                    <div class="font-bold mt-6">Problems printing a memo sample return label?</div>
                    <div class="mt-1 leading-open">You must allow pop-up windows from our website to print a return label.</div>

                    <div class="font-bold mt-6">Problems searching the different companies?</div>
                    <div class="mt-1 leading-open">In order to search the Textile Library and order memos from each company, you must visit the home page of each of the companies from which you wish to order samples. For example, if you want to search Textus products, choose the 'Textus' link from the home page or click the 'Textus' link on the main navigation bar on the left.</div>

                    <div class="font-bold mt-6">Optimal Viewing</div>
                    <div class="mt-1 leading-open">These pages look their best when viewed with the monitor display settings of 1024x768 or higher, regular size font on and at high color resolution. If you think your pages don't look right, please check these settings on your monitor.</div>

                    <div class="font-bold mt-6">Color Accuracy</div>
                    <div class="mt-1 leading-open">The upholstery images on this site have been scanned and color corrected for the best possible web viewing. Please note that color display accuracy is a function of your monitor. Monitors can vary greatly in their ability to display accurate color. To improve the color accuracy on your monitor try the following suggestions. Adjust brightness and contrast to a comfortable level. Color calibrate your monitor according to the manufacturers instructions. Color settings can change over time and over the life of the monitor so it is a good idea to calibrate your monitor once a month.</div>

                    <div class="font-bold mt-6">Upgrading Your Browser</div>
                    <div class="mt-1 leading-open">This site is optimized for Internet Explorer version 7 or higher and Firefox version 3 or higher. If you are currently using an older browser and would like to download the latest version click <a class="text-black hover:text-orange" href="http://www.microsoft.com/downloads" target="_blank">http://www.microsoft.com/downloads</a> for the newest version of Internet Explorer. For the latest version of Firefox <a class="text-black hover:text-orange" href="http://www.mozilla.org/firefox" target="_blank">http://www.mozilla.org/firefox</a>.</div>
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
