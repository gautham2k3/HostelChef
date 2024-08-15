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
    <div class="container">
      <form id="contact" method="post" action="contact.php">
        <h3>Contact Form</h3>
        <h4>Enter your Information</h4>
        <fieldset>
          <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
          <input name="email" type="email" class="form-control" id="email" placeholder="Your Email" tabindex="2" required>
        </fieldset>
        <fieldset>
          <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject" tabindex="3" required>
        </fieldset>
        <fieldset>
          <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" tabindex="4" required></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
    <footer class="footer">
      <p>&copy; 2024 Dorm Cooking. All rights reserved.</p>
      <ul class="footer-menu">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/recipies">Recipes</RouterLink></li>
        <li><RouterLink to="/terms">Terms of Service</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
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

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  margin-top: 100px; /* Adjusted margin to avoid overlapping with the fixed header */
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  color: #ff6f61;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #ff6f61;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43A047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
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

  .footer-menu {
    flex-direction: column;
  }

  .footer-menu li {
    margin: 10px 0;
  }
}
</style>
