import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/sentiment',
        name: 'sentiment',
        component: () => import(/* webpackChunkName: "about" */ '../components/SentimentComp.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "about" */ '../components/ProfileComp.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "about" */ '../components/SearchComp.vue'),
    },
    {
        path: '/describe',
        name: 'describe',
        component: () => import(/* webpackChunkName: "about" */ '../components/DescribeComp.vue'),
    },
    {
        path: '/twitter',
        name: 'twitter',
        component: () => import(/* webpackChunkName: "about" */ '../components/TwitterComp.vue'),
    },
      {
        path: '/wolfram',
        name: 'wolfram',
        component: () => import(/* webpackChunkName: "about" */ '../components/WolframComp.vue'),
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import(/* webpackChunkName: "about" */ '../components/CatalogComp.vue'),
    },
    {
        path: '/research',
        name: 'research',
        component: () => import(/* webpackChunkName: "about" */ '../components/ResearchComp.vue'),
    },
    {
        path: '/friends',
        name: 'friends',
        component: () => import(/* webpackChunkName: "about" */ '../components/FriendsComp.vue'),
    },
    {
        path: '/sentiment',
        name: 'sentiment',
        component: () => import(/* webpackChunkName: "about" */ '../components/SentimentComp.vue'),
    },
  ]
})


export default router;