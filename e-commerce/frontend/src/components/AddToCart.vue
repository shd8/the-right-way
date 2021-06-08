<template>
  <button v-if="isInCart(id)" @click="$store.dispatch('retrieveFromUserCart', id)" >
    <i class="fas fa-shopping-cart in-cart"></i>
  </button>
  <button  v-else @click="$store.dispatch('addToUserCart', id)">
    <i class="fas fa-shopping-cart"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default defineComponent({
  props: ['id'],
  computed: {
    ...mapMutations([
      'addToCart',
      'retrieveFromCart',
    ]),

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

button {
  background-color: $purple;
  width: 3em;
  height: 3em;
  border-style: none;
  border-radius: 0em 1em 0em 1em;

  &:hover {
    cursor: pointer;

    i {
      color: black;
    }
  }
}

i {
  color: white;
  font-size: 1.5em;
}

.in-cart {
  color: black;
}

</style>
