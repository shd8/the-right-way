<template>
    <button
      class="custom-button"
      v-if="isInWishlist(id)"
      @click="$store.dispatch('retrieveFromUserWishlist', id)"
      >
        <em class="fas fa-heart"></em>
    </button>
    <button
    v-else
    @click="$store.dispatch('addToUserWishlist' ,id)"
    class="custom-button"
    >
      <em class="far fa-heart"></em>
    </button>

</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapState } from 'vuex';

export default defineComponent({
  props: ['id'],
  computed: {

    ...mapActions([
      'addToUserWishlist',
      'retrieveFromUserWishlist',
    ]),

    ...mapGetters([
      'isInWishlist',
    ]),

    ...mapState([
      'isUserLogged',
    ]),
  },

  name: 'AddToWishlist',
  components: {
  },

  data() {
    return {
      showModal: false,
    };
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
  margin: 20.5em 0em 0em 5em;
}

em {
  color: $purple;
  font-size: 1.5em;
}

</style>
