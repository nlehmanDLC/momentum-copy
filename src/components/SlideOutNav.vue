<template>
    <div class="z-30 relative" style="top: -33px; left: -38px;">
        <div class="absolute block pin-l">
            <div class="float-left relative text-center cursor-pointer"
                 @click="toggle"
                 :style="'padding: 2px; margin-left: 14px; top:-27px; width:25px; height: 520px; background:url(' + getHandle() + ') right center no-repeat rgb(255, 255, 255);'"></div>

            <transition name="slide" mode="out-in">
                <div class="float-left relative pin-t" v-if="isOpen">
                    <div class="relative z-20 flex" style="width: 198px; height: 480px;">
                        <sina-pearson-nav v-if="$route.query.brand === '50'"/>
                        <momentum-textiles-nav v-if="$route.query.brand === '81'"/>
                        <loom-source-nav v-if="$route.query.brand === '40'"/>
                        <textus-nav v-if="$route.query.brand === '21'"/>
                        <img class="float-right" style="height: 475px;" src="../assets/nav_door_handle_lt.png" @click="toggle">
                    </div>
                    <div class="absolute pin-t h-full bg-white z-10" style="left: -30px; width: 198px; margin-left:5px; margin-right: 15px;"></div>
                </div>
            </transition>
            </div>
    </div>
</template>

<script>
import SinaPearsonNav from "./SinaPearsonNav";
import MomentumTextilesNav from "./MomentumTextilesNav";
import LoomSourceNav from "./LoomSourceNav";
import TextusNav from "./TextusNav";
export default {
  components: { TextusNav, LoomSourceNav, MomentumTextilesNav, SinaPearsonNav },
  data() {
    return {
      isOpen: true
    };
  },
  methods: {
    getHandle() {
      return this.isOpen
        ? require("../assets/nav_door_handle_lt.png")
        : require("../assets/nav_door_handle_rt.png");
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  },
  created() {
    setTimeout(() => {
      this.close();
    }, 1000);
  }
};
</script>

<style>
.slide-out {
  height: 470px;
  width: 180px;
  transform: translateX(-100%);
  transition: transform 0.6s ease-in-out;
}
.isOpen {
  transform: translateX(0);
}

.opener {
  right: -34px;
}

.slide-leave-active,
.slide-enter-active {
  transition: all 1s ease;
}
.slide-enter {
  transform: translate(-100%, 0);
  opacity: 0;
}
.slide-leave-to {
  transform: translate(-100%, 0);
  opacity: 0;
}
</style>
