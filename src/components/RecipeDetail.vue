<template>
    <div class="recipe-detail">
      <div class="recipe-detail-cover">
        <img :src="recipe.image" :alt="recipe.title" />
      </div>
      <div class="recipe-detail-info">
        <h2>{{ recipe.title }}</h2>
        <div class="recipe-meta">
          <span>{{ recipe.time }} • {{ recipe.servings }} servings • {{ recipe.calories }} calories</span>
        </div>
        <p>{{ recipe.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipe: {},
      };
    },
    mounted() {
      const recipeId = this.$route.params.id;
      // Replace this with your actual API call or data fetching logic
      fetch(`https://api.example.com/recipes/${recipeId}`)
        .then(response => response.json())
        .then(data => {
          this.recipe = data;
        });
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for the recipe detail page */
  .recipe-detail {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;
  }
  
  .recipe-detail-cover img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  
  .recipe-detail-info {
    margin-top: 20px;
  }
  
  .recipe-detail-info h2 {
    font-size: 28px;
    color: #333;
  }
  
  .recipe-meta {
    margin: 10px 0;
    color: #777;
    font-size: 14px;
  }
  
  .recipe-detail-info p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }
  </style>
  