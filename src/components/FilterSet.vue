<template>
    <div class="border-b border-grey leading-open">
        <div class="flex justify-between cursor-pointer ml-3" @click="toggle()">
            <slot name="title"></slot>
            <div class="text-orange pr-3">[<span v-show="isOpen">-</span><span v-show="!isOpen">+</span>]</div>
        </div>
        <div v-show="isOpen" class="ml-3">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ["isOpen", "setName"],
  methods: {
    toggle() {
      if (!this.isOpen) {
        this.$emit("open-filter", this.setName);
      }
    }
  }
};
</script>

<style scoped>
</style>
