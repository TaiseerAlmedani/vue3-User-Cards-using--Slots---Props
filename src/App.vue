<script>
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
export default {
  components: {
    AboutView, HomeView
  },
}
</script>
<template>
  <header>
    <nav>
      <ul>
        <li> <router-link to="/home">Go to Home</router-link></li>
        <li><router-link to="/about">Go to About</router-link></li>
        <li><router-link to="/contact">Go to contact</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
</template>
<style scoped>
nav ul {
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 20px;
}

ul li {
  list-style-type: none;
  font-size: 3rem;
}
</style>