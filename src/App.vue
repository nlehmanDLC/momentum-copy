<template>
    <div id="app" class="container bg-white mx-auto p-6" style="width:900px; height:600px;">
        <div class="flex flex-col h-full justify-between">
            <router-view></router-view>
            <div class="flex mt-3 -mb-3">
                <div style="width:172px;" class="border-t border-grey mr-2"></div>
                <div class="flex border-t border-grey pt-2 w-full">
                    <router-link to="/about_momentum_group" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Who We Are</router-link>
                    <router-link to="/momentum_group_news" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">News</router-link>
                    <router-link to="/momentum_group_awards" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Awards</router-link>
                    <router-link to="/momentum_group_terms_and_conditions" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Terms & Conditions</router-link>
                    <router-link to="/contact_momentum_group" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Contact Us</router-link>
                    <router-link to="/memo-returns" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">Return Samples</router-link>
                    <router-link to="/momentum_group_faq" class="font-sans text-xxs text-grey-dark hover:text-orange no-underline pr-4">FAQ</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
</style>
