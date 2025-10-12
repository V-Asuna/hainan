import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AttractionsView from '../views/AttractionsView.vue'
import RoutesView from '../views/RoutesView.vue'
import GuideView from '../views/GuideView.vue'
import FoodView from '../views/FoodView.vue'
import CulturalProductsView from '../views/CulturalProductsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/attractions', name: 'Attractions', component: AttractionsView },
  { path: '/routes', name: 'Routes', component: RoutesView },
  { path: '/guide', name: 'Guide', component: GuideView },
  { path: '/food', name: 'Food', component: FoodView },
  { path: '/cultural-products', name: 'CulturalProducts', component: CulturalProductsView },
  // 兼容旧路径直开
  { path: '/index.html', redirect: '/' },
  { path: '/attractions.html', redirect: '/attractions' },
  { path: '/routes.html', redirect: '/routes' },
  { path: '/guide.html', redirect: '/guide' },
  { path: '/food.html', redirect: '/food' },
  { path: '/cultural-products.html', redirect: '/cultural-products' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router