<template>
    <div class="h-full flex flex-col">
        <heading>
            <img src="../assets/design.gif">
            <template slot="brand"><img src="../assets/sinapearson_logo.gif"></template>
        </heading>
        <div class="flex-1 flex overflow-y-auto">
            <sina-pearson-nav/>
            <div class="w-3/5">
                <div class="flex-1 pt-6 leading-open">
                    <div class="flex items-end">
                        <div class="flex-no-shrink">
                            <img src="../assets/sina_pearson_portrait.jpg">
                            <div class="text-grey italic text-xxs">photo by Linda Jaquez photography</div>
                        </div>
                        <div class="ml-4">Sina Pearson is a visionary designer and entrepreneur who has, for nearly three decades, set industry standards for sophistication and technical innovation. Sina is celebrated for her exuberant color palette, complex textures and lively, accessible patterns that gracefully complement one another. One of the very first to infuse a jolt of high style into the contract realm in the 1980s, she has added her savvy stamp as well to institutional, hospitality, health care, public spaces and residential settings.</div>
                    </div>

                    <div class="mt-4">Sina Pearson's textiles have a point of view. Each collection tells a story, and her inspirations are far-flung. Scandinavian modernism. Byzantine architecture. Coffee beans and pasta. Southwest folk art The Cote d'Azur. Most prominent of her sources is nature itself, a great passion for Sina. An avid gardener, nature's impact for her is not limited to dramatic vistas but conjures an emotion. In conceiving a design, she might ask, "What does winter in the Pacific northwest feel like?" and then render the ineffable through choices of color tone, yarn, weave and pattern. Her collections' vast allusions to foreign places, among them Mexico, Asia, Africa, France, the Mediterranean, Scandinavia, and the Caribbean, result from an attitude that traveling and the experience of other cultures are essential. Growing up in Seattle, she was influenced by three cultures: Scandinavian (her own heritage, and a significant pioneer population in her town), Northwest coast Native American (her present beach house is on an Indian reservation) and Japanese (a community well represented in her region.) Her textiles' vivid "sense of place" might be conveyed through the handspun look of traditional Scandinavian textiles, the sparkly luminescence of an Italian roadster, the jewel tones of Moorish tile work, or the classic rib weave of a Mexican serape.</div>

                    <div class="mt-4">Sina graduated from the University of Washington with a double-major in fine arts/textiles and Swedish language/literature, then earned her MFA in textiles from Cranbrook in 1972. After working for Skidmore, Owings and Merrill/Chicago as a color/materials specialist, she won a grant from the Swedish government to study at the Royal Academy of Arts, Crafts and Design in Stockholm in 1973. Returning to New York, she directed the textile divisions of a series of A-list firms: Jens Risom, Ward Bennett/Brickel Associates, and Unika Vaev.</div>

                    <div class="mt-4">As president and director of design at Unika Vaev (1981-1990), Sina singularly created more than 100 fabrics, and built one of the most successful textile companies of the 1980s. In 1985 she co-founded ACT, the Association for Contract Textiles; it remains the guidepost for industry standards and promoting awareness of textiles. She served as its president from 1989-1990.</div>

                    <div class="mt-4">In 1990 she founded her own company, Sina Pearson Textiles, which designs, manufactures and distributes exclusive upholstery textiles for contract, healthcare, institutional, hospitality and residential use. Always ahead of the curve, she has won numerous awards for design excellence and continued to make technological inroads. Since its inception, Sina Pearson Textiles has introduced more than 300 designs.</div>

                    <div class="mt-4">Sina is committed to green design and makes every effort to find sustainable sources for her fabrics. Using recycled yarns whenever possible, more than 85% of her patterns are made in the USA. "I believe in wasting less, using what we have more economically and leaving more for future generations. Each of us should make a commitment in our own way to preserve our precious environment."</div>
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
