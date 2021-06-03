<template>
  <div class="wishlist">
    <p>Wishlist works</p>
    <p>{{getWishlist}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Wishlist',
  components: {
  },
  computed: {
    ...mapGetters([
      'getWishlist',
    ]),
  },
});
</script>

<style lang="scss" scoped>

  .wishlist {
    padding-top: 7em;
  }
</style>
