import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Search from './Search.vue'
import Serie from './Serie.vue'
import EpisodeList from './EpisodeList.vue'
import ProductList from './ProductList.vue'
import Product from './Product.vue'
import Episode from './Episode.vue'

Vue.use(VueRouter);

const routes = [
  /*{
    path: '/',
    redirect: '/products'
  },

  {
    path: '/products',
    component: ProductList
  },
  {
    path: '/products/:id',
    component: Product
  },*/
  {
    path: '/',
    component: Search
  },
  {
    path: '/serie/:id',
    component: EpisodeList
  },
  {
    path: '/serie/episodes/:id',
    component: EpisodeList
  },
  {
    path: '/episode/:id',
    component: Episode
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
