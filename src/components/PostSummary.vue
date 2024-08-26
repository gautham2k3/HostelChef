<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <p>by {{ author }} on {{ new Date(date).toLocaleDateString() }}</p>
      <router-link :to="`/post/${_id}`">Read More...</router-link><br/>
      <div v-if="tags && tags.length">
        <span 
          v-for="tag in tags" 
          :key="tag" 
          :class="getBadgeColor(tag)"
          class="badge"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'author', 'date', '_id', 'tags'],
    methods: {
      getBadgeColor(tag) {
        const badgeColors = ['lightgray', 'darkgray', 'red', 'blue', 'green', 'yellow'];
        const tagId = Array.from(tag).map((char) => char.charCodeAt(0)).reduce((sum, code) => sum + code, 0) % 6;
        return badgeColors[tagId];
      },
    },
  };
  </script>
  
  <style>
  .card {
    margin: 1em;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: green;
  }
  
  .badge {
    display: inline-block;
    padding: 0.5em;
    margin-right: 0.5em;
    border-radius: 3px;
    color: white;
    font-size: 0.9em;
  }
  .badge.lightgray { background-color: lightgray; }
  .badge.darkgray { background-color: darkgray; }
  .badge.red { background-color: red; }
  .badge.blue { background-color: blue; }
  .badge.green { background-color: green; }
  .badge.yellow { background-color: yellow; }
  </style>
  