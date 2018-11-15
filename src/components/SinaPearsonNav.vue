<template>
    <div style="width: 172px;" class="mr-2 flex flex-col h-full justify-between">
        <div class="flex flex-col pt-6">
            <router-link to="/" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Products
            </router-link>
            <router-link to="/sina_pearson_collections" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Collections
            </router-link>
            <router-link to="/sina_pearson_design" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Design
            </router-link>
            <router-link to="/color_stories" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Color Stories
            </router-link>
            <router-link to="/" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Travel Journals
            </router-link>
            <router-link to="/" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Press
            </router-link>
            <router-link to="/" class="no-underline text-grey-darker hover:text-orange text-xs mb-2 font-sans">
                Awards
            </router-link>
        </div>
        <div class="flex flex-col pb-4">
            <router-link to="/momentum_textiles" class="no-underline font-sans text-grey hover:text-orange text-xs mb-2">
                Momentum Textiles
            </router-link>
            <router-link to="/loomsource" class="no-underline font-sans text-grey hover:text-orange text-xs mb-2">
                LoomSource
            </router-link>
            <router-link to="/textus" class="no-underline font-sans text-grey hover:text-orange text-xs mb-2">Textus
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: "sina-pearson-nav"
};
</script>
