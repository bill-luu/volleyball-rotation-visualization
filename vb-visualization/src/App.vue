<template>
  <Court/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Court from './components/court.vue';

@Options({
  components: {
    Court,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
