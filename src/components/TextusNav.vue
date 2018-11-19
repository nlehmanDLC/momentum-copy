<template>
    <div style="width: 172px;" class="mr-2 flex flex-col h-full justify-between">
        <div class="flex flex-col pt-6">
            <router-link to="/products?brand=21" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Products
            </router-link>
            <router-link to="/textus" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                News
            </router-link>
            <router-link to="/textus" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Constructions
            </router-link>
            <router-link to="/textus" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Design
            </router-link>
        </div>
        <div class="flex flex-col pb-4">
            <router-link to="/sinapearson" class="no-underline font-sans text-grey hover:text-orange text-xs mb-2">
                Sina Pearson
            </router-link>
            <router-link to="/momentum_textiles" class="no-underline font-sans text-grey hover:text-orange text-xs mb-2">
                Momentum Textiles
            </router-link>
            <router-link to="/loomsource" class="no-underline font-sans text-grey hover:text-orange text-xs mb-2">
                LoomSource
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: "textus-nav"
};
</script>
