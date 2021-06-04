<template>
  <button
    v-if="getWishlist.some((productId) => productId === id)"
    @click="$store.commit('retrieveFromWishlist', id)">
        <i class="fas fa-heart"></i>
  </button>
  <button v-else @click="$store.commit('addToWishlist', id)">
    <i class="far fa-heart"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapGetters } from 'vuex';

export default defineComponent({
  props: ['id'],
  computed: {
    ...mapMutations([
      'addToWishlist',
      'retrieveFromWishlist',
    ]),
    ...mapGetters([
      'getWishlist',
    ]),
  },
  name: 'AddToWishlist',
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
  background-color: $light-purple;
  width: 3em;
  height: 3em;
  border-style: none;
  border-radius: 1em 0em 1em 0em;

  &:hover {
    background-color: $purple;
    cursor: pointer;
  }
}

i {
  color: white;
  font-size: 1.5em;
}

</style>
