<template>
  <div>
    <div v-if="cart.length" class="cart">
      <h2>Your cart !</h2>
      <hr>
        <div class="products">
          <ul
            v-for='product in cart'
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
        <div class="purchase">
          <button class="purchase__button">Purchase !</button>
          <p class="purchase__price">{{getCartPrice}}</p>
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
import { mapGetters, mapState } from 'vuex';
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
      'getProductById',
      'getCartPrice',
    ]),
    ...mapState([
      'cart',
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

.purchase {
  position: fixed;
  bottom: 1em;
  display: flex;
  align-items: baseline;

  &__price {
    background-color: white;
    font-size: 1.5em;
    border: 1px solid $purple;
    border-radius: 1em 0em 1em 0em;
    padding: 0.2em 0.5em;
  }

  &__button {
    background-color: $purple;
    font-size: 1.5em;
    border-style: none;
    border-radius: 0em 1em 0em 1em;
    padding: 0.2em 0.5em;
    margin-right: 1em;

  }
}

</style>
