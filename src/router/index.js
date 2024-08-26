import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Recipes from '@/views/Recipes.vue'
import Test from '@/views/test.vue'
import Posts from '@/views/Posts.vue'

const routes = [
    {paths: '/', component: Home},
    { path: '/contact', component: Contact },
    { path: '/recipes', component: Recipes },
    { path: '/test', component: Test},
    { path: '/posts', component: Posts}
    
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router

