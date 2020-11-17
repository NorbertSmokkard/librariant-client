const routes = [
  { path: "/",
    component: () => import("../components/recomendations.vue"),
    name: "recomendations",
    props: true,

  
  },
  { path: "/search",
    component: () => import("../components/search/search.vue"),
    name:"search",
    props: true,
    
  },
  { path: "/book",
    component: () => import("../components/bookPage"),
    name:"book",
    props: true,
    
  },

];

export default routes;