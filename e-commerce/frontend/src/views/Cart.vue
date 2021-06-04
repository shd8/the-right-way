<template>
  <div>
    <div v-if="getCart.length" class="cart">
      <h2>Your cart !</h2>
      <hr>
        <div class="products">
          <ul
            v-for='product in getCart'
            :key="product._id"
            class="products__list"
            >
              <CartProduct
                v-if="getProductById(product)"
                :id='getProductById(product)._id'
                :name='getProductById(product).name'
                :price='getProductById(product).price'
                :images='getProductById(product).images' />
          </ul>
        </div>
    </div>

    <div v-else class="cart">
      <h2 class="empty-title">Your cart is empty ...</h2>
      <hr>
      <CategorySelector />
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import CartProduct from '@/components/CartProduct.vue';
import CategorySelector from '@/components/CategorySelector.vue';

export default defineComponent({
  name: 'Wishlist',
  components: {
    CartProduct,
    CategorySelector,
  },
  computed: {
    ...mapGetters([
      'getCart',
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

.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-title {
  font-size: 1.5em;
}
</style>
