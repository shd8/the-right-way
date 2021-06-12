<template>
  <button v-if="isInCart(id)" @click="$store.dispatch('retrieveFromUserCart', id)" >
    <em class="fas fa-shopping-cart"></em>
  </button>
  <button  v-else @click="$store.dispatch('addToUserCart', id)">
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

button {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
  border-style: none;
  border: 1px solid $purple;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  margin: 3.5em 0em 0em -8em;

  &:hover {
    cursor: pointer;
  }
}

em {
  color: $purple;
  font-size: 1.5em;
}

</style>
