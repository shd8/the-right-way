<template>
  <div class="wishlist-container">
    <i class="fas fa-heart"></i>
    <div v-if="wishlist.length" class="wishlist">
      <h2 class="h2Item">Your wishlist !</h2>
      <hr class="hrItem">
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
      <h2 class="empty-title h2Item">Your wishlist is empty ...</h2>
      <hr class="hrItem">
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

.wishlist-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fa-heart {
  color: $purple;
  font-size: 4em;
  padding: 0.5em;
}

.h2Item {
  font-size: 1.7em;
}

</style>
