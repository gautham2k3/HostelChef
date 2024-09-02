<template>
  <div>
    <h2>Recipe Details</h2>
    <div v-if="recipes.length" class="scroll-container">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe._id"
        :image="recipe.imageUrl"
        :subtitle="'Tasty'"
        :title="recipe.name"
        :time="recipe.time"
        :servings="2"  
        :calories="256"
        :description="recipe.description"
      />
    </div>
    <div v-else>
      <p>Loading recipes...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import RecipeCard from '@/components/recipeCards.vue';

export default {
  components: {
    RecipeCard
  },
  setup() {
    const recipes = ref([]); // Initialize with an empty array

    // Fetch the latest recipes when the component is mounted
    onMounted(async () => {
      try {
        const response = await fetch('http://localhost:5050/recipe/latest');
        const data = await response.json();
        recipes.value = data; // Assign the fetched data to recipes
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    });

    return {
      recipes
    };
  }
};
</script>

<style scoped>
.body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  backdrop-filter: blur(20px);
}
.scroll-container {
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
