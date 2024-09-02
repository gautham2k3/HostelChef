<template>
  <header class="header">
    <a href="#" class="logo">
      <img src="@/assets/logos/android-chrome-512x512.png" alt="Logo" class="logo-image" />
    </a>
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <nav :class="['navbar', { 'navbar-open': menuOpen }]">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/recipes">Recipes</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/test">Test</RouterLink>
    </nav>
  </header>
  <div class="recipe-wrapper">
    <div class="left">
      <div class="pol">
        <img :src="recipe.imageUrl" :alt="recipe.name" />
        <div class="caption">{{ recipe.name }}</div>
      </div>
    </div>
    <div class="right">
      <div class="des">
        <div class="recipeKey">
          <span>Time: {{ recipe.time }}</span>
        </div>
        <div class="recipeKey">
          <span class="tags-span">{{ tags }}</span>
        </div>
        <div class="recipeKey">
          <h2>{{ recipe.description }}</h2>
        </div>
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
        <h2>Instructions</h2>
        <ol>
          <li v-for="(instruction, index) in recipe.instructions" :key="index">
            {{ instruction }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { baseUrl } from '@/config';
export default {
  data() {
    return {
      recipe: {},
      tags: ''
    };
  },
  mounted() {
    const recipeId = this.$route.params.id; // Get the recipe ID from the route
    fetch(`${baseUrl}/recipe/${recipeId}`)
      .then((response) => response.json())
      .then((data) => {
        this.recipe = data;
        this.tagsLoader();
      })
      .catch((error) => {
        console.error('Error fetching recipe:', error);
      });
  },
  methods: {
    tagsLoader() {
      for(let i = 0; i < this.recipe.tags.length; i++) {
        this.tags+="#"+String(this.recipe.tags[i])+"    ";
      }
    }
  }
};
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
  width: 120px; /* Increased the size */
  height: 120px; /* Increased the size */
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
.recipe-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.left , .right {
  box-sizing: border-box;
}

.left {
  position: fixed;
  width: 400px; 
  height: 100vh; 
  overflow: auto; 
  margin-top: 50px;
}

.right {
  margin-left: 400px; 
  padding: 20px;
  flex: 1;
  overflow-y: auto; 
  height: 100vh; 
}

.tags-span {
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight:lighter;
  font-style: italic;
  color: #333;
}

.pol {
  background: #fff;
  padding: 1rem;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
}

.pol img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  border-style: dashed;
}

.caption {
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}

.des {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 0.5rem;
  color: darkslategray;
  align-items: center;
}

.recipeKey {
  width: auto;
  height: auto;
  background-color: antiquewhite;
  border-radius: 20px;
  justify-content:center;
  align-items: center;
  margin-bottom: 10px;
}

.recipeKey span {
  display: block;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}
h2 {
  margin-top: 20px;
  color: #444;
  text-align: center;
}

ul, ol {
  padding-left: 20px;
  font-size: medium;
}

ul li, ol li {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .recipe-wrapper {
    flex-direction: column;
    padding: 10px;
  }

  .left, .right {
    width: 100%;
    height: auto;
    margin: 0;
  }

  .left {
    margin-bottom: 20px;
    position: relative;
    margin: auto;
  }

  .image-container {
    padding: 0.5rem;
  }

  .description {
    padding: 10px;
  }

  .recipeKey {
    padding: 8px;
    font-size: 1rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  ul, ol {
    padding-left: 10px;
  }
}

@media (max-width: 480px) {
  .recipeKey span {
    font-size: 0.9rem;
  }

  h2 {
    font-size: 1rem;
  }
}

</style>