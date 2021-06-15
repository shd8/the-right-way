<template>
  <button
  v-if="isInCart(id)"
  @click="$store.dispatch('retrieveFromUserCart', id)"
  class="custom-button"
  >
    <em class="fas fa-shopping-cart"></em>
  </button>
  <button
  v-else
  @click="$store.dispatch('addToUserCart', id)"
  class="custom-button"
  >
    <em class="fas fa-dollar-sign"></em>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  props: ['id'],
  computed: {

    ...mapActions([
      'addToUserCart',
      'retrieveFromUserCart',
    ]),

    ...mapGetters([
      'isInCart',
    ]),
  },
  name: 'AddToCart',
  components: {
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  margin: 3.5em 0em 0em -8em;
}

em {
  color: $purple;
  font-size: 1.5em;
}

</style>
