// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <header class="header">
      <a href="#" class="logo">
        <img src="@/assets/logos/android-chrome-512x512.png" alt="Logo" class="logo-image" />
      </a>
      <button class="menu-toggle" @click="toggleMenu">☰</button>
      <nav :class="['navbar', { 'navbar-open': menuOpen }]">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/recipes">Recipes</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>
    <div class="card">
      <img src="https://avatars.githubusercontent.com/u/112716884?v=4" alt="Avatar" />
      <h1>Gautham</h1>
      <p>Full Stack Developer</p>
      <div class="social-links">
        <a href="https://github.com/gautham2k3" target="_blank" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-.9-1-1.2-1-1.2-.8-.5.1-.5.1-.5.9.1 1.3 1 1.3 1 .8 1.4 2.2.9 2.7.7.1-.6.3-1 .5-1.2-2.3-.3-4.7-1.2-4.7-5 0-1 .4-1.8 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1 .8-.2 1.7-.4 2.6-.4s1.8.1 2.6.4c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.5 0 3.8-2.5 4.7-4.8 5 .3.3.6.8.6 1.5v2.5c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.4 0-5.5-4.5-10-10-10z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/gautham-naidu/" target="_blank" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13 10.2h-3v-4.5c0-1-.4-1.5-1.3-1.5s-1.4.7-1.4 1.5v4.5h-3v-9h3v1.3c.6-.9 1.6-1.3 2.6-1.3 2 0 3.2 1.3 3.2 3.7v5.3z"></path>
          </svg>
        </a>
        <a href="https://x.com/gautham2k3" target="_blank" title="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.8-1.6 2.2-2.7-.9.6-2 .9-3 1.2-.9-.9-2.1-1.5-3.5-1.5-2.6 0-4.6 2.1-4.6 4.6 0 .4 0 .9.1 1.3-3.8-.1-7.2-2-9.4-4.8-.4.6-.5 1.4-.5 2.2 0 1.6.8 3 2.1 3.8-.8 0-1.5-.3-2-.6v.1c0 2.3 1.6 4.2 3.8 4.6-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.7 2 2.9 3.8 2.9-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.6 0-.8-.1 1.8 1.2 3.8 1.8 6 1.8 7.2 0 11.2-6 11.2-11.2v-.5c.8-.6 1.6-1.3 2.2-2.1z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>
  
<style scoped>
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
.card {
  background: linear-gradient(145deg, #1e293b, #374151);
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #f8fafc;
  margin: 0 auto; 
}

.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ff6f61; /* Match the header color */
  margin-bottom: 15px;
}

.card h1 {
  font-size: 20px;
  font-weight: bold;
  color: #cbd5e1;
}

.card p {
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-links a {
  text-decoration: none;
  color: #ff6f61; /* Match the header color */
  font-size: 20px;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ffdab9; /* Match the hover color of navbar links */
}

.social-links a svg {
  width: 24px;
  height: 24px;
}

.additional-links {
  margin-top: 20px;
}

.card-link {
  display: block;
  margin: 10px 0;
  padding: 10px;
  background-color: #ff6f61;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.card-link:hover {
  background-color: #ffdab9;
}

.footer {
  bottom: 0;
  width: 100%;
  background-color: #5d4037;
  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
  top: 0;
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
}
</style>
