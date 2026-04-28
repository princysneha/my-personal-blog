<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <router-link to="/">MySite</router-link>
      </div>
      <ul class="navbar-links">
        <li><router-link to="/">Profile</router-link></li>
        <li><router-link to="/blogs">Blogs</router-link></li>
        <li><router-link :to="`/blogs/1`">BlogPost 1</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// No logic needed for static navbar
</script>

<style scoped>
.navbar {
  background: #4f8cff;
  padding: 0.7rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.navbar-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}
.navbar-logo a {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
}
.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.08rem;
  font-weight: 500;
  transition: color 0.2s;
}
.navbar-links a.router-link-exact-active {
  border-bottom: 2px solid #fff;
}
.navbar-links a:hover {
  color: #222;
}
</style>
