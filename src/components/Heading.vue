<template>
    <div>
        <div class="flex justify-between">
            <div>
                <router-link to="/"><img src="../assets/yarnball_logo.gif"></router-link>
            </div>
            <div>
                <slot name="brand">
                    <img src="../assets/momtex_logo.gif" width="132" height="23">
                </slot>
            </div>
        </div>
        <div class="flex items-end w-full -mt-10" style="height: 70px;">
            <div style="width:172px;" class="border-grey border-b mr-2"></div>
            <div class="flex-1 border-grey border-b font-title"><slot></slot></div>
            <div class="border-grey border-b flex justify-end items-baseline">
                <a href="#" class="text-orange no-underline text-xs mr-2">login</a>
                <span class="text-grey mr-2">|</span>
                <a href="#" class="text-orange no-underline text-xs mr-2">favorites</a>
                <span class="text-grey mr-2">|</span>
                <a href="#" class="text-orange no-underline text-xs">cart [0]</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
