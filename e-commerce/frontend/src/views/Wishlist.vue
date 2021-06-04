<template>
  <div>
    <div v-if="getWishlist.length" class="wishlist">
      <h2>Your wishlist !</h2>
      <hr>
        <div class="products">
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
    </div>

    <div v-else class="wishlist">
      <h2 class="empty-title">Your wishlist is empty ...</h2>
      <hr>
    </div>
  </div>
</template>

<script lang="ts" scoped>
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
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

h2 {
  @include h2Item;
}

hr {
  @include hrItem;
}

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__list {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.wishlist {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-title {
  font-size: 1.5em;
}
</style>
