<script setup lang="ts">
import jcHeader from './components/jcHeader.vue';
import jcMain from './components/jcMain.vue';
import jcFooter from './components/jcFooter.vue';

import pageContact from './pages/pageContact.vue';
</script>

<template>
  <jc-header></jc-header>

  <router-view />

  <jc-footer></jc-footer>
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
