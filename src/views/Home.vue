<template>
  <div class="home flex flex-col h-full">
    <div class="h-16"></div>
    <div class="flex items-baseline">
      <div style="width: 180px;">
        <img alt="Momentum Group" src="../assets/momgrp_logo_orange.gif" style="width:160px; height:26px;">
      </div>
      <div class="font-sans text-grey-dark text-sm leading-normal text-justify" style="width: 550px;">
        Momentum Group is one of the nation’s leading creators of <router-link to="/environment" class="text-green no-underline">sustainable</router-link> contract textiles. It is the tie
        that binds four innovators in the textile design industry:
        <router-link to="/sinapearson" class="text-grey-darker hover:text-orange no-underline">Sina Pearson</router-link>,
        <router-link to="/momentum_textiles" class="text-grey-darker hover:text-orange no-underline">Momentum Textiles</router-link>,
        <router-link to="loomsource" class="text-grey-darker hover:text-orange no-underline">LoomSource</router-link>
        and
        <router-link to="textus" class="text-grey-darker hover:text-orange no-underline">Textus</router-link>.
      </div>
    </div>
    <div class="flex h-full">
      <div style="width:180px;" class="flex items-end">
        <div class="flex flex-col">
          <router-link to="/sinapearson" class="font-sans text-smm leading-open text-orange no-underline">Sina Pearson</router-link>
          <router-link to="/momentum_textiles" class="font-sans text-smm leading-open text-orange no-underline">Momentum Textiles</router-link>
          <router-link to="/loomsource" class="font-sans text-smm leading-open text-orange no-underline">LoomSource</router-link>
          <router-link to="/textus" class="font-sans text-smm leading-open text-orange no-underline">Textus</router-link>
        </div>
      </div>
      <div>
        <carousel class="mt-20" :image-list="imageList"></carousel>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";

export default {
  name: "home",
  components: {
    Carousel
  },
  data() {
    return {
      imageList: [
        "chicago_2015_01.jpg",
        "chicago_2015_02.jpg",
        "chicago_2015_03.jpg",
        "chicago_2015_04.jpg"
      ]
    };
  }
};
</script>
