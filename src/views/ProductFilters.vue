<template>
    <div style="width: 270px" class="border-r border-grey">
        <filter-set :is-open="openFilter === 'type'" set-name='type' v-on:open-filter="setFilter">
            <template slot="title">Type:</template>
            <div class="mt-2"><input type="checkbox" v-model="filters.upholstery"> Upholstery</div>
            <div class="mt-1 ml-4"><input type="checkbox" v-model="filters.crypton"> Crypton</div>
            <div class="mt-1 ml-4"><input type="checkbox" v-model="filters.coated"> Coated</div>
            <div class="mt-1 ml-4"><input type="checkbox" v-model="filters.bleach_cleanable"> Bleach Cleanable</div>
            <div class="mt-1 ml-4"><input type="checkbox" v-model="filters.outdoor"> Outdoor</div>
        </filter-set>
        <filter-set :is-open="openFilter === 'style'" set-name='style' v-on:open-filter="setFilter">
            <template slot="title">Style:</template>
            <div class="flex flex-wrap mt-2">
                <div class="w-1/3"><input type="checkbox"> Solid</div>
                <div class="w-1/3"><input type="checkbox"> Stripe</div>
                <div class="w-1/3"><input type="checkbox"> Geometric</div>
                <div class="w-1/3"><input type="checkbox"> Organic</div>
                <div class="w-1/3"><input type="checkbox"> Random</div>
            </div>
        </filter-set>
        <filter-set :is-open="openFilter === 'color'" set-name='color' v-on:open-filter="setFilter">
            <template slot="title">Color:</template>
            <div class="flex flex-wrap mt-2">
                <div class="w-1/2"><input type="checkbox"> Red</div>
                <div class="w-1/2"><input type="checkbox"> Warm Neutral</div>
                <div class="w-1/2"><input type="checkbox"> Orange</div>
                <div class="w-1/2"><input type="checkbox"> Cool Neutral</div>
                <div class="w-1/2"><input type="checkbox"> Yellow</div>
                <div class="w-1/2"><input type="checkbox"> Yellow-Green</div>
                <div class="w-1/2"><input type="checkbox"> Green</div>
                <div class="w-1/2"><input type="checkbox"> Green-Blue</div>
                <div class="w-1/2"><input type="checkbox"> Blue</div>
                <div class="w-1/2"><input type="checkbox"> Blue-Purple</div>
                <div class="w-1/2"><input type="checkbox"> Purple</div>
                <div class="w-1/2"><input type="checkbox"> Purple-Red</div>
            </div>
        </filter-set>
        <filter-set :is-open="openFilter === 'price'" set-name='price' v-on:open-filter="setFilter">
            <template slot="title">Net Price:</template>
            <div class="flex flex-wrap mt-2">
                <div class="w-1/2"><input type="checkbox"> Under $30</div>
                <div class="w-1/2"><input type="checkbox"> $30-$60</div>
                <div class="w-1/2"><input type="checkbox"> Over %60</div>
            </div>
        </filter-set>
        <filter-set :is-open="openFilter === 'durability'" set-name='durability' v-on:open-filter="setFilter">
            <template slot="title">Durability:</template>
            <div class="flex flex-wrap mt-2">
                <div class="w-1/2"><input type="checkbox"> 50,000</div>
                <div class="w-1/2"><input type="checkbox"> 100,000</div>
            </div>
        </filter-set>
        <filter-set :is-open="openFilter === 'inventory'" set-name='inventory' v-on:open-filter="setFilter">
            <template slot="title">Inventory:</template>
            <div class="flex flex-wrap mt-2">
                <div class="w-1/2"><input type="checkbox"> 100</div>
                <div class="w-1/2"><input type="checkbox"> 200</div>
                <div class="w-1/2"><input type="checkbox"> 300</div>
                <div class="w-1/2"><input type="checkbox"> 400</div>
                <div class="w-1/2"><input type="checkbox"> 500</div>
            </div>
        </filter-set>
    </div>
</template>
<script>
import FilterSet from "@/components/FilterSet.vue";

export default {
  props: ["filters"],
  name: "product-filters",
  components: { FilterSet },
  data() {
    return {
      openFilter: "type"
    };
  },
  methods: {
    setFilter(filterName) {
      this.openFilter = filterName;
    }
  }
};
</script>
