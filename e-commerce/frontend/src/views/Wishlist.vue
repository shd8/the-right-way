<template>
  <div class="wishlist">
    <p>Wishlist works</p>
    <ul
      v-for='product in getWishlist'
      :key="product._id"
      class="products__list"
      >
        <WishlistProduct
          v-if="getProductById(product)"
          :id='getProductById(product)._id'
          :name='getProductById(product).name'
          :price='getProductById(product).price'
          :images='getProductById(product).images' />
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import WishlistProduct from '@/components/WishlistProduct.vue';

export default defineComponent({
  name: 'Wishlist',
  components: {
    WishlistProduct,
  },
  computed: {
    ...mapGetters([
      'getWishlist',
      'getProducts',
      'getProductById',
    ]),
  },
});
</script>

<style lang="scss" scoped>

  .wishlist {
    padding-top: 7em;
  }
</style>
