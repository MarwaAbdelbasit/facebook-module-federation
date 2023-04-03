<template>
  <LikeBtn :btnText="btnText"/>
</template>

<script>
import LikeBtn from './components/LikeBtn.vue';

export default {
  name: 'App',
  components: { LikeBtn },
  props: ["btnText"],
}
</script>

<style lang="scss">
@import './assets/styles/normalize';
@import '@/assets/styles/_variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
