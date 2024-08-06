<template>
  <div>
    <header class="header">
      <a href="#" class="logo">
        <img src="@/assets/logos/android-chrome-512x512.png" alt="Logo" class="logo-image" />
      </a>
      <nav :class="['navbar', { 'navbar-open': menuOpen }]">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">Devices</a>
        <a href="#">Contact</a>
      </nav>
      <button class="menu-toggle" @click="toggleMenu">☰</button>
    </header>
    <div class="app-container">
      <h1 class="title">Select the Cooktop</h1>
      <div class="container">
        <Card
          data-image="https://ideogram.ai/assets/image/lossless/response/vCFqHR19StmDUtjoLeBlsQ"
        >
          <template v-slot:header>
            <h1>Kettle</h1>
          </template>
          <template v-slot:content>
            <p>Plugs into an outlet and uses electricity to power an integrated heating element.</p>
          </template>
        </Card>
        <Card
          data-image="https://ideogram.ai/assets/progressive-image/balanced/response/9d7_0hm1TpCeGQfcjwBLVw"
        >
          <template v-slot:header>
            <h1>Induction Cooktop</h1>
          </template>
          <template v-slot:content>
            <p>A type of electric cooktop that uses electromagnetism to heat cookware.</p>
          </template>
        </Card>
        <Card
          data-image="https://ideogram.ai/assets/image/lossless/response/-rtP6QXZSwKG9OsXONCLUA"
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
      <p>&copy; 2024 Dorm Cooking. All rights reserved.</p>
      <ul class="footer-menu">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from './components/Card.vue'
import StackedCards from './components/StackedCards.vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  const logoImage = document.querySelector('.logo-image')
  //const navbarOpen = document.querySelector('.navbar-open')
  if (window.innerWidth < 768) {
    // Example: Hide logo on screens smaller than 768px
    logoImage.style.display = 'none'
  } else {
    logoImage.style.display = 'block' // Show logo on larger screens
  }
}
</script>

<style scoped>
/* General styles */
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
  height: 60px; /* Set a fixed height for the header */
  padding: 0 50px; /* Adjust padding for left and right */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff6f61; /* Material design color */
  color: #ffffff;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-bottom: 2px solid #fff; /* White border at the bottom */
}

.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  font-weight: 500; /* Slightly lighter font weight */
  position: relative; /* Added relative positioning */
}

.logo-image {
  width: 150px; /* Increased the size */
  height: 150px; /* Increased the size */
  border-radius: 50%;
  margin-right: 10px; /* Space between image and text */
  position: absolute; /* Positioned absolutely within the logo container */
  top: -10px; /* Adjusted to pop off the header */
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

.navbar {
  display: flex;
  margin-left: auto; /* Ensure the navigation stays on the right in larger screens */
}

.navbar a {
  font-size: 18px;
  font-weight: 400;
  font-family: monospace;
  margin-left: 20px;
  text-decoration: none;
  color: #ffffff;
  padding: 10px;
  transition:
    background-color 0.3s,
    color 0.3s;
  border-radius: 4px;
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffdab9;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 20px; /* Adjusted padding to accommodate fixed header */
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #5d4037;
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
  width: 100%; /* Ensure the footer spans the full width */
  background-color: #5d4037; /* Adjusted background color */
  color: #ffffff; /* Adjusted text color */
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

@media (max-width: 768px) {
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

  .navbar-open .logo-image {
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
