<template>
  <div>
    <h2>Recipe Details</h2>
    <div v-if="recipe" class="scroll-container">
      <RecipeCard
        :key="recipe._id1"
        :image="recipe.imageUrl"
        :subtitle="recipe.difficulty"
        :title="recipe.name"
        :time="recipe.time"
        :servings="2"
        :calories="280"
        :description="recipe.description"
      />
      <div v-for="ingredient in recipe.ingredients" :key="ingredient._id">
        <RecipeCard
          :image="'ingredient.imageUrl'"
          :subtitle="'HHHhhh'"
          :title="'jjjjj'"
          :time="'ingredient.time'"
          :servings="2"
          :calories="280"
          :description="'ingredient.description'"
        />
      </div>
    </div>
    <div v-else>
      <p>Loading recipe...</p>
    </div>
  </div>
</template>

<script>
import RecipeCard from '@/components/recipeCards.vue';
import { ref, onMounted } from 'vue';
import { baseUrl } from '@/config';

export default {
  components: {
    RecipeCard,
  },
  setup() {
    const recipe = ref(null);
    const recipeId = "66c43932e13e5517b0f8d78d"; // The ObjectId string from your MongoDB

    const fetchRecipeById = async (id) => {
      try {
        // Fetch the recipe by ID
        const response = await fetch(`${baseUrl}/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Recipe not found');
        }
        let rec= await response;
        print(rec);
        recipe.value = await response.json(); // Store the fetched recipe data
      } catch (error) {
        console.error('Failed to fetch recipe by ID:', error);
      }
    };

    onMounted(() => {
      fetchRecipeById(recipeId); // Fetch the specific recipe when component mounts
    });

    return {
      recipe,
    };
  },
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
