<script>
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
export default {
  components: {
    AboutView , HomeView
  },
}
</script>
<template>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  <HomeView />
</template>
<style scoped>
nav ul{
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 20px;
}
ul li{
  list-style-type: none;
  font-size: 3rem;
}
</style>