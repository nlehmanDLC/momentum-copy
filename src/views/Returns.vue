<template>
    <div class="h-full flex flex-col">
        <heading><img src="../assets/memo_return.gif"></heading>
        <div class="flex-1 flex">
            <momentum-textiles-nav/>
            <div class="flex-1 pt-6 leading-open">
                <div class="w-3/5">
                    This service is offered at no cost to our customers. We recommend returning
                    25 or more memos in order to minimize the environmental impact of return transportation.
                </div>

                <div class="w-3/5 my-8">
                    <hr class="border-grey border-b">
                </div>

                <div class="flex w-3/5">
                    <div class="flex-1">
                        <div class="font-bold">Carrier:</div>
                        <div>UPS Ground</div>
                        <div class="font-bold mt-4">Billing:</div>
                        <div>Momentum Group</div>
                    </div>
                    <div class="flex-1 border-l pl-4">
                        <div class="font-bold">Ship to:</div>
                        <div>Momentum Group</div>
                        <div>Attn: Memo Sample Return</div>
                        <div>655 Brigham Rd. Ste 100</div>
                        <div>Greensboro, NC 27409</div>
                    </div>
                </div>

                <div class="w-3/5 my-8">
                    <hr class="border-grey border-b">
                </div>

                <div>
                    <a href="#" class="text-orange no-underline">print [>]</a>
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
