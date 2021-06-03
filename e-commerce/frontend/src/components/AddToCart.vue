<template>
    <button  @click="$store.commit('addToCart', id)">
        <i class="fas fa-shopping-cart"></i>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';

export default defineComponent({
  props: ['id'],
  computed: {
    ...mapMutations([
      'addToCart',
    ]),
  },
  name: 'AddToCart',
  components: {
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

    button {
        background-color: $purple;
        width: 3em;
        height: 3em;
        border-style: none;
        border-radius: 0em 1em 0em 1em;
    }

    i {
        color: white;
        font-size: 1.5em;
    }

</style>
