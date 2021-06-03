<template>
  <div class="cart">
    <p>Cart works</p>
    <p>{{getCart}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Cart',
  components: {
  },
  computed: {
    ...mapGetters([
      'getCart',
    ]),
  },
});
</script>

<style lang="scss" scoped>

  .cart {
    padding-top: 7em;
  }
</style>
