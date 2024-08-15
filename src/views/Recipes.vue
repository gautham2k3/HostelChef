<template>
   <header class="header">
     <nav class="navbar container">
       <a href="#" class="logo">
         <img src="@/assets/logos/android-chrome-512x512.png" alt="Logo" class="logo-image" />
       </a>
       <div class="search">
         <form class="search-form">
           <input type="text" name="search" class="search-input" placeholder="Search for Recipes" autofocus>
           <button type="submit" class="search-submit" disabled><i class="bx bx-search"></i></button>
         </form>
       </div>
       <div ref="menu" class="menu" :class="{ 'is-active': isMenuOpen }">
         <ul class="menu-inner">
           <li class="menu-item">
             <RouterLink to="/" class="menu-link" @click="closeMenu">Home</RouterLink>
           </li>
           <li class="menu-item">
             <RouterLink to="/recipes" class="menu-link" @click="closeMenu">Recipes</RouterLink>
           </li>
           <li class="menu-item">
             <RouterLink to="/contact" class="menu-link" @click="closeMenu">Contact</RouterLink>
           </li>
         </ul>
       </div>
       <button ref="burger" class="menu-toggle" @click="toggleMenu">☰</button>
     </nav>
   </header>
 </template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// State to manage menu open/close status
const isMenuOpen = ref(false);

// Method to toggle the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Method to close the menu (used when a menu link is clicked)
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>


<style lang="scss" scoped>
 @import url('https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css');
:root {
   --color-white-100: hsl(206, 5%, 100%);
   --color-white-200: hsl(206, 5%, 96%);
   --color-white-300: hsl(206, 5%, 80%);
   --color-white-400: hsl(206, 5%, 65%);
   --color-white-500: hsl(206, 5%, 50%);

   --color-black-100: hsl(213, 20%, 9%);
   --color-black-200: hsl(213, 23%, 8%);
   --color-black-300: hsl(214, 21%, 6%);
   --color-black-400: hsl(210, 21%, 6%);
   --color-black-500: hsl(216, 22%, 4%);

   --color-red-100: hsl(349, 100%, 90%);
   --color-red-200: hsl(349, 100%, 80%);
   --color-red-300: hsl(349, 100%, 70%);
   --color-red-400: hsl(349, 100%, 60%);
   --color-red-500: hsl(349, 100%, 45%);

   --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
   --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
   --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

*,
*::before,
*::after {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   list-style: none;
   list-style-type: none;
   text-decoration: none;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-rendering: optimizeLegibility;
}

html {
   font-size: 100%;
   box-sizing: inherit;
   scroll-behavior: smooth;
   height: -webkit-fill-available;
}

body {
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   font-size: 1rem;
   font-weight: 400;
   line-height: 1.5;
   color: var(--color-black-500);
   background-color: var(--color-white-100);
}

main {
   overflow: hidden;
}

a,
button {
   cursor: pointer;
   user-select: none;
   border: none;
   outline: none;
   background: none;
   box-shadow: none;
}

img,
video {
   display: block;
   max-width: 100%;
   height: auto;
   object-fit: cover;
}

// Elements
.section {
   margin: 0 auto;
   padding: 5rem 0 2rem;
}

.container {
   max-width: 80rem;
   height: auto;
   margin: 0 auto;
   padding: 0 1.25rem;
}

.centered {
   text-align: center;
   vertical-align: middle;
   margin-bottom: 1rem;
}

.btn {
   display: inline-block;
   font-family: inherit;
   font-size: 1rem;
   font-weight: 500;
   line-height: 1.5;
   text-align: center;
   vertical-align: middle;
   white-space: nowrap;
   user-select: none;
   outline: none;
   border: none;
   border-radius: 0.25rem;
   text-transform: unset;
   transition: all 0.3s ease-in-out;

   &-darken {
      padding: 0.75rem 2rem;
      color: var(--color-white-100);
      background-color: var(--color-black-200, #101419);
      box-shadow: var(--shadow-medium);
   }

   &-neutral {
      padding: 0.75rem 2rem;
      color: var(--color-black-500);
      background-color: var(--color-white-100, #fff);
      box-shadow: var(--shadow-medium);
   }
}

// Headers
.header {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 5;
   width: 100%;
   height: auto;
   margin: 0 auto;
   background: var(--color-white-100 ,#fff);
   background-color: #ff6f61;
   border-bottom: 2px solid #fff;
   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.navbar {
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   align-items: center;
   align-content: center;
   height: auto;

   padding-top: 0.5rem;

   // Responsive Media Query
   @media only screen and (min-width: 62rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      width: 100%;
      height: 4.25rem;
      padding-top: 0;
      margin: 0 auto;
   }
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
  left: auto;
}


.search {
   grid-column: span 2;
   order: 3;
   width: 100%;
   height: auto;
   margin: 0 auto;
   padding-block: 1rem;
   &-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
      width: 100%;
      height: auto;
      padding-inline: 1.5rem;
      border-radius: 3rem;
      background: var(--color-white-200, #f4f5f5);
   }

   &-input {
      display: block;
      font-family: inherit;
      font-size: 1rem;
      font-weight: normal;
      line-height: inherit;
      width: 100%;
      height: 100%;
      padding-block: 0.75rem;
      border: none;
      outline: none;
      color: var(--color-black-500, #080a0c);
      background: transparent;
   }

   &-submit {
      display: block;
      font-size: 1.25rem;
      line-height: 1.5;
      margin-top: 0.25rem;
      color: var(--color-white-500, #798086);
      background: transparent;
   }

   // Responsive Media Query
   @media only screen and (min-width: 62rem) {
      justify-self: center;
      grid-column: initial;
      order: initial;
      width: 100%;
      height: auto;

      &-form {
         max-width: 30rem;
      }
   }
}

.menu {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  z-index: 8;
  padding-block: 3rem 2rem;
  background: var(--color-white-100, #ff6f61);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.45s ease-in-out;
  margin-left: auto;

  &.is-active {
    top: 0;
    width: 100%;
    height: inherit;
    border-bottom: 2px solid #fff;
  }

   &-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 1.25rem;
   }

   &-link {
    font-size: 18px;
    font-weight: 400;
    font-family: monospace;
    margin-left: 20px;
    text-decoration: none;
    color: #ffffff;
    padding: 10px;
    transition: all 0.35s ease-in-out;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffdab9;
      }
   }

   // Responsive Media Query
   @media only screen and (min-width: 36rem) {
      position: relative;
      justify-self: end;
      top: 0;
      left: inherit;
      width: auto;
      height: auto;
      padding-block: 0;
      background: none;
      box-shadow: none;
      transition: none;

      &-inner {
         display: flex;
         flex-direction: row;
         column-gap: 1.25rem;
         margin: 0 auto;
      }

      &-link {
         text-transform: capitalize;
      }
   }
}

.menu-toggle {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: #0c0c0c;
  z-index: 10;
  cursor: pointer;
  margin-left: auto;
  &.is-active {
    transform: rotate(90deg); /* Rotate the button when active */
  }
}

  @media screen and (max-width: 768px) {
    .logo {
      flex-direction:column;
      align-items: flex-start;
      padding: 20px;
      height: auto;
      left: 0;
    }
    .logo-image {
      width: 60px;
      height: 60px;
      margin-right: 0;
      position: absolute;
      left: -20px;
      margin-top: 4px;
    }
   .menu-toggle {
      display: block;      
   }
   .menu {
      display: flex;
      flex-direction: column;
      width: 100%;
   }
   .menu a {
      margin: 10px 0;
      padding: 10px 20px;
   }
   .menu-open {
      display: flex;
   }
   
  }
</style>