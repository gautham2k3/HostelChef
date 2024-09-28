<template>
  <div>
    <header class="header">
      <a href="#" class="logo">
        <img src="@/assets/logos/android-chrome-512x512.png" alt="Logo" class="logo-image" />
      </a>
      <nav :class="['navbar', { 'navbar-open': menuOpen }]">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/recipes">Recipes</RouterLink>
        <router-link to="/contact">Contact</router-link> 
      </nav>
      <button class="menu-toggle" @click="toggleMenu">☰</button>
    </header>
    <div class="app-container">
      <h1 class="title">Select the Cooktop</h1>
      <div class="container">
        <Card @click="categoryClick('kettle')"
          data-image="https://i.postimg.cc/9fszcqkj/cooktop-3.jpg"
        >
          <template v-slot:header>
            <h1>Kettle</h1>
          </template>
          <template v-slot:content>
            <p>Plugs into an outlet and uses electricity to power an integrated heating element.</p>
          </template>
        </Card>
        <Card @click="categoryClick('Induction')" data-image="https://i.postimg.cc/YSvhcxb3/cooktop-2.jpg">
          <template v-slot:header>
            <h1>Induction Cooktop</h1>
          </template>
          <template v-slot:content>
            <p>A type of electric cooktop that uses electromagnetism to heat cookware.</p>
          </template>
        </Card>
        <Card @click="categoryClick('Stove')"
          data-image="https://i.postimg.cc/YCqvR7FT/cooktop-1.jpg"
        >
          <template v-slot:header>
            <h1>Stove</h1>
          </template>
          <template v-slot:content>
            <p>Uses an open flame to cook food on the stovetop.</p>
          </template>
        </Card>
      </div>
    </div>

    <div class="stacked-cards-container">
      <StackedCards />
    </div>

    <footer class="footer">
      <p>&copy; 2024 Hostel Chef. All rights reserved.</p>
      <ul class="footer-menu">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <RouterLink to="/contact">Contact</RouterLink>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue'
import StackedCards from '@/components/StackedCards.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  const logoImage = document.querySelector('.logo-image')
  if (window.innerWidth < 768) {
    if (menuOpen.value) {
      logoImage.style.display = 'none' // Hide logo when the menu is open
    } else {
      logoImage.style.display = 'block' // Show logo when the menu is closed
    }
  } else {
    logoImage.style.display = 'block' // Always show logo on larger screens
  }
}
const categoryClick = (category) => {
  router.push(`/recipes`)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  background-color: #16363a;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; 
  padding: 0 50px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff6f61; 
  color: #ffffff;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  border-bottom: 2px solid #fff;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.logo-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 10px;
  position: absolute;
  top: -10px;
  border: 2px solid #5d4037;
}

.menu-toggle {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 20px; 
}

.title {
  font-family: 'Caveat', cursive;
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: auto;
}

.card h1 {
  font-size: 20px;
  margin: 10px 0;
}

.card p {
  padding: 0 10px 10px;
  line-height: 1.5em;
  font-size: 16px;
}

.stacked-cards-container {
  padding: 20px;
}

.footer {
  width: 100%;
  background-color: #5d4037;
  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
}

.footer-menu {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 10px 0 0;
}

.footer-menu li {
  margin: 0 15px;
}

.footer-menu a {
  color: #ffffff;
  text-decoration: none;
}

.footer-menu a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    height: auto;
  }

  .menu-toggle {
    display: block;
  }

  .navbar {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .navbar a {
    margin: 10px 0;
    padding: 10px 20px;
  }

  .navbar-open {
    display: flex;
  }

  .navbar-open .logo {
    display: none;
  }

  .logo-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 0;
    position: absolute;
    left: 50px;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
  }

  .footer-menu {
    flex-direction: column;
  }

  .footer-menu li {
    margin: 10px 0;
  }
}
</style>
