<script setup lang="ts">
import { inject } from 'vue';
// import { ThemeConfig } from 'some-iti-repo'
import HelloWorld from './components/HelloWorld.vue'

// const hostTheme = inject('host').theme; // if whole host provided
const hostTheme = inject('theme');
// const hostTheme = inject('theme') as ThemeConfig; // TS alternative
console.log(hostTheme.primary) // ← expect 'purple' from dummy-config.js
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
