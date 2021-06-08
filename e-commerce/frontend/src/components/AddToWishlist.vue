<template>

    <button
      v-if="isInWishlist(id)"
      @click="$store.dispatch('retrieveFromUserWishlist', id)"
      >
        <i class="fas fa-heart"></i>
    </button>
    <button v-else @click="$store.dispatch('addToUserWishlist' ,id)">
      <i class="far fa-heart"></i>
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

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },

    handleToggleModal() {
      this.toggleModal();
    },
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
  z-index: 1;
  margin: 3.5em 14em 0em 0em;

  &:hover {
    cursor: pointer;
  }
}

i {
  color: $purple;
  font-size: 1.5em;
}

</style>
