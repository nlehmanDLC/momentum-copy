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
        import(/* webpackChunkName: "momentumTextiles" */ "./views/aboutMomentumGroup.vue")
    },
    {
      path: "/momentum_group_news",
      name: "news",
      component: () =>
        import(/* webpackChunkName: "momentumTextiles" */ "./views/News.vue")
    },
    {
      path: "/momentum_group_awards",
      name: "awards",
      component: () =>
        import(/* webpackChunkName: "momentumTextiles" */ "./views/Awards.vue")
    },
    {
      path: "/momentum_group_terms_and_conditions",
      name: "terms",
      component: () =>
        import(/* webpackChunkName: "momentumTextiles" */ "./views/Terms.vue")
    },
    {
      path: "/contact_momentum_group",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "momentumTextiles" */ "./views/Contact.vue")
    },
    {
      path: "/memo-returns",
      name: "returns",
      component: () =>
        import(/* webpackChunkName: "momentumTextiles" */ "./views/Returns.vue")
    },
    {
      path: "/momentum_group_faq",
      name: "faq",
      component: () => import(/* webpackChunkName: "momentumTextiles" */ "./views/Faq.vue")
    },
    {
      path: "/environment",
      name: "environment",
      component: () =>
        import(/* webpackChunkName: "momentumTextiles" */ "./views/Environment.vue")
    },
    {
      path: "/sinapearson",
      name: "sinapearson",
      component: () =>
        import(/* webpackChunkName: "sinapearson" */ "./views/Sinapearson.vue")
    },
    {
      path: "/momentum_textiles",
      name: "momentumTextiles",
      component: () =>
        import(/* webpackChunkName: "momentumTextiles" */ "./views/MomentumTextiles.vue")
    },
    {
      path: "/loomsource",
      name: "loomsource",
      component: () =>
        import(/* webpackChunkName: "loomsource" */ "./views/LoomSource.vue")
    },
    {
      path: "/textus",
      name: "textus",
      component: () =>
        import(/* webpackChunkName: "textus" */ "./views/Textus.vue")
    },
    {
      path: "/sina_pearson_collections",
      name: "sinaPearsonCollections",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/SinaPearsonCollections.vue")
    },
    {
      path: "/sina_pearson_design",
      name: "sinaPearsonDesign",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/SinaPearsonDesign.vue")
    },
    {
      path: "/color_stories",
      name: "colorStories",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/ColorStories.vue")
    },
    {
      path: "/color_story_november_2018",
      name: "colorStoryNovember2018",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/ColorNovember2018.vue")
    },
    {
      path: "/travel_journals",
      name: "travelJournals",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/TravelJournals.vue")
    },
    {
      path: "/travel_journal_barcelona",
      name: "travelJournalBarcelona",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/TravelJournalBarcelona.vue")
    },
    {
      path: "/sina_pearson_press",
      name: "sinaPearsonPress",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/SinaPearsonPress.vue")
    },
    {
      path: "/sp_pr_2017_01",
      name: "sinaPearsonPress201701",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/SinaPearsonPress201701.vue")
    },
    {
      path: "/sina_pearson_awards",
      name: "sinaPearsonAwards",
      component: () =>
        import(/* webpackChunkName: "sinaperason" */ "./views/SinaPearsonAwards.vue")
    },
    {
      path: "/products",
      name: "products",
      component: () =>
        import(/* webpackChunkName: "products" */ "./views/Products.vue")
    },
    {
      path: "/momentum_textiles_news",
      name: "momentumTextilesNews",
      component: () =>
        import(/* webpackChunkName: "momentumTextiles" */ "./views/MomentumTextilesNews.vue")
    },
    {
      path: "/pattern/:patternId/colorway/:colorwayId",
      name: "pattern",
      component: () =>
        import(/*webpackChunkName: "products" */ "./views/Pattern.vue")
    }
  ]
});
