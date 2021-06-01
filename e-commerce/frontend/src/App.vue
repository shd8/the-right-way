<template>
  <Header />
  <router-view class="view"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
  data() {
    return {
    };
  },
  methods: {},
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Roboto Slab', serif;
}

.view {
  padding-top: 7em;
}
</style>
