<template>
  <div class="recipe-card">
    <div class="recipe-cover">
      <img :src="image" :alt="title" />
    </div>
    <div class="recipe-info">
      <div class="recipe-header">
        <span class="recipe-subtitle">{{ subtitle }}</span>
        <h3>{{ title }}</h3>
      </div>
      <div class="recipe-overview">
        <div class="recipe-time">
          <i class="icon-time"></i>{{ time }}
        </div>
        <div class="recipe-serve">
          <i class="icon-serve"></i>{{ servings }}
        </div>
        <div class="recipe-calories">
          <i class="icon-calories"></i>{{ calories }}
        </div>
      </div>
      <div class="recipe-about">
        <p>{{ description }}</p>
      </div>
    </div>
    <button @click="openRecipe" class="read-more-btn">→</button>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    servings: {
      type: String,
      required: true,
    },
    calories: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    openRecipe() {
      window.open(this.url, "_blank");
    },
  },
};
</script>

<style scoped>
.recipe-card {
  width: 280px;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.05) 0px 6px 6px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 25px, rgba(0, 0, 0, 0.1) 0px 10px 10px;
}

.recipe-card .recipe-cover {
  flex-shrink: 0;
  height: 180px;
  overflow: hidden;
}

.recipe-card .recipe-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.recipe-card:hover .recipe-cover img {
  transform: scale(1.05);
}

.recipe-card .recipe-info {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.recipe-card .recipe-header {
  margin-bottom: 10px;
}

.recipe-card .recipe-subtitle {
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.recipe-card .recipe-info h3 {
  margin: 0;
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

.recipe-card .recipe-overview {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin-top: 10px;
}

.recipe-card .recipe-time,
.recipe-card .recipe-serve,
.recipe-card .recipe-calories {
  display: flex;
  align-items: center;
}

.recipe-card .recipe-time i,
.recipe-card .recipe-serve i,
.recipe-card .recipe-calories i {
  margin-right: 6px;
}

.recipe-card .recipe-about {
  margin-top: 16px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  text-overflow: ellipsis;
  overflow: hidden;
}

.recipe-card .recipe-about p {
  margin: 0;
}

.recipe-card .icon-time::before {
  content: '⏰'; /* Time icon */
}

.recipe-card .icon-serve::before {
  content: '🍽️'; /* Serving icon */
}

.recipe-card .icon-calories::before {
  content: '🔥'; /* Calories icon */
}

.read-more-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 15px 0 0 0; /* Inverted border radius */
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 10;
}

.read-more-btn:hover {
  background-color: #ff4500;
  transform: scale(1.1);
}

.read-more-btn:focus {
  outline: none;
}
</style>
