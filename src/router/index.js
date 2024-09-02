import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Recipes from '@/views/Recipes.vue'
import Test from '@/views/test.vue'
import Posts from '@/views/Posts.vue'
import RecipeDetail from '@/views/RecipeDetail.vue'

const routes = [
    {paths: '/', component: Home},
    { path: '/contact', component: Contact },
    { path: '/recipes', component: Recipes },
    { path: '/test', component: Test},
    { path: '/posts', component: Posts},
    {
      path: '/recipe/:id',
      name: 'RecipeDetails',
      component: RecipeDetail,
      props: true,
    }
    
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router

