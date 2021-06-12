<template>
  <Header />
  <SwitchToRight
  class="switch-right-toggle"
  :class="{'switch-to-right-left-mode': !rightMode}"
  />

  <router-view
  class="view"
  :class="{'view-left-mode': !rightMode}"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SwitchToRight from '@/components/SwitchToRight.vue';
import { mapState } from 'vuex';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Header,
    SwitchToRight,
  },

  computed: {
    ...mapState([
      'rightMode',
    ]),
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

*::-webkit-scrollbar {
  display: none;
}

.view-left-mode,
.switch-to-right-left-mode {
  cursor: url(https://cur.cursors-4u.net/cursors/cur-8/cur770.cur), auto;
}

.switch-right-toggle {
  padding-top: 8em;
  margin: 0em 1em;
  z-index: 1;
}

</style>
