<template>
    <div>
        <img :src="getImage()"/>
    </div>
</template>

<script>
export default {
  props: {
    imageList: Array
  },
  methods: {
    getImage() {
      let randomImage = Math.floor(Math.random() * this.imageList.length);
      return require("../assets/" + this.imageList[randomImage]);
    }
  }
};
</script>

<style scoped>
</style>
