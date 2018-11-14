<template>
    <div class="h-full flex flex-col">
        <heading><img src="../assets/contact_us.gif"></heading>
        <div class="flex-1 flex">
            <momentum-textiles-nav/>
            <div class="flex-1 flex w-full pt-6">
                <div class="w-3/5">
                    <div class="font-bold">Customer service:</div>
                    <div class="py-1"><a href="mailto:customerservice@momtex.com" class="no-underline text-orange">customerservice@momtex.com</a></div>
                    <div class="py-1">(800) 366-6839</div>
                    <div class="py-1">(949) 833-8886</div>
                    <div class="py-1">(949) 833-9233 Fax</div>

                    <hr class="w-full border-grey border-b mt-8">

                    <div class="font-bold mt-4">Careers</div>
                    <div class="mt-1">
                        <a href="#" class="no-underline text-orange font-sans text-xs">Click here</a> to inquire about current job opportunities.
                    </div>

                    <hr class="w-full border-grey border-b mt-8">

                    <div class="font-bold mt-4">Outlet Store</div>
                    <div class="mt-1">
                        Visit the <a href="#" class="no-underline text-orange font-sans text-xs">Outlet Store</a> to search our inventory of discounted products.
                    </div>

                    <hr class="w-full border-grey border-b mt-8">

                    <div class="mt-4">
                        Questions or comments about our website can be directed to: <a href="mailto:webmaster@momtex.com" class="no-underline text-orange font-sans text-xs">webmaster@momtex.com</a>
                    </div>

                </div>
                <div class="ml-2">
                    <div class="font-bold">Locations</div>

                    <div class="mt-4">Corporate Headquarters</div>
                    <div class="mt-1">17811 Fitch</div>
                    <div class="mt-1">Irvine, CA 92614</div>

                    <div class="mt-5">
                        <router-link to="/" class="text-black font-sans text-xs">Chicago Showroom</router-link>
                    </div>
                    <div class="mt-1">222 Merchandise Mart</div>
                    <div class="mt-1">Suite 11-106</div>
                    <div class="mt-1">Chicago, IL 60654</div>

                    <div class="mt-5">
                        <router-link to="/" class="text-black font-sans text-xs">New York Showroom</router-link>
                    </div>
                    <div class="mt-1">257 Park Ave. South</div>
                    <div class="mt-1">14th Floor</div>
                    <div class="mt-1">New York, NY 10010</div>

                    <div class="mt-5">
                        <router-link to="/" class="text-black font-sans text-xs">Dallas Showroom</router-link>
                    </div>
                    <div class="mt-1">1617 Hi Line Drive</div>
                    <div class="mt-1">Suite 308</div>
                    <div class="mt-1">Dallas, Texas 75207</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import MomentumTextilesNav from "@/components/MomentumTextilesNav";

export default {
  components: {
    MomentumTextilesNav,
    Heading
  }
};
</script>
