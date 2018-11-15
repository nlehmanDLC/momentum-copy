import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about_momentum_group",
      name: "aboutMomentumGroup",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/aboutMomentumGroup.vue")
    },
    {
      path: "/momentum_group_news",
      name: "news",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/News.vue")
    },
    {
      path: "/momentum_group_awards",
      name: "awards",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Awards.vue")
    },
    {
      path: "/momentum_group_terms_and_conditions",
      name: "terms",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Terms.vue")
    },
    {
      path: "/contact_momentum_group",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "/memo-returns",
      name: "returns",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Returns.vue")
    },
    {
      path: "/momentum_group_faq",
      name: "faq",
      component: () => import(/* webpackChunkName: "about" */ "./views/Faq.vue")
    },
    {
      path: "/environment",
      name: "environment",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Environment.vue")
    },
    {
      path: "/sinapearson",
      name: "sinapearson",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Sinapearson.vue")
    },
    {
      path: "/momentum_textiles",
      name: "momentumTextiles",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/MomentumTextiles.vue")
    },
    {
      path: "/loomsource",
      name: "loomsource",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/LoomSource.vue")
    },
    {
      path: "/textus",
      name: "textus",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Textus.vue")
    },
    {
      path: "/sina_pearson_collections",
      name: "sinaPearsonCollections",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SinaPearsonCollections.vue")
    },
    {
      path: "/sina_pearson_design",
      name: "sinaPearsonDesign",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SinaPearsonDesign.vue")
    },
    {
      path: "/color_stories",
      name: "colorStories",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ColorStories.vue")
    },
    {
      path: "/color_story_november_2018",
      name: "colorStoryNovember2018",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ColorNovember2018.vue")
    }
  ]
});
