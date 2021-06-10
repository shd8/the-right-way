<template>
  <Header />
  <SwitchToRight class="switch-right-toggle" />

  <router-view class="view"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SwitchToRight from '@/components/SwitchToRight.vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Header,
    SwitchToRight,
  },

});
</script>

<style lang="scss">

.body--overflow-hidden {
    overflow: hidden;
  }

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Roboto Slab', serif;
}

.switch-right-toggle {
  padding-top: 8em;
  margin: 0em 1em;
  z-index: 1;
}

</style>
