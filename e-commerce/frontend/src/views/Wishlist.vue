<template>
  <div>
    <div v-if="wishlist.length" class="wishlist">
      <h2>Your wishlist !</h2>
      <hr>
        <div class="products">
          <ul
            v-for='product in wishlist'
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
      <CategorySelector />
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';
import { mapGetters, mapState } from 'vuex';
import WishlistProduct from '@/components/WishlistProduct.vue';
import CategorySelector from '@/components/CategorySelector.vue';

export default defineComponent({
  name: 'Wishlist',
  components: {
    WishlistProduct,
    CategorySelector,
  },
  computed: {
    ...mapGetters([
      'getProductById',
    ]),
    ...mapState([
      'wishlist',
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
