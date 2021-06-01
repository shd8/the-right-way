<template>

  <Header />
    <router-link to="/detail">
        Detail ...
    </router-link>
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
}
</style>
