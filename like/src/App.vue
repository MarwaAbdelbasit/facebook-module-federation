<template>
  <div>
    <button class="like-btn" @click="solid = !solid">
      <font-awesome-icon v-if="solid" icon="fa-solid fa-thumbs-up" />
      <font-awesome-icon v-else icon="fa-regular fa-thumbs-up" />
      <span v-if="!solid"> Like</span>
      <span v-else> Unlike</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      solid: false,
    }
  },
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

.like-btn {
  background: $white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px $shadow-color, 0 8px 16px $shadow-color;
  margin: 1rem 0;
  color: $facebookBlue;
  border: 1px solid $input-border-color;
}
</style>
