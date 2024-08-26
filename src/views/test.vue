<template>
    <header class="header">
        <nav class="navbar">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
            <RouterLink to="/posts">Posts</RouterLink>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

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
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    color: #ffffff;
    z-index: 1000; /* Ensure the header stays on top of other elements */
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
</style>
