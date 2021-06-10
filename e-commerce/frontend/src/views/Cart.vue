<template>
  <div class="cart-container">
    <i class="fas fa-shopping-cart"></i>
    <div v-if="cart.length" class="cart">
      <h2 class="h2Item">Your cart !</h2>
      <hr class="hrItem">
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
        <div
        class="purchase"
        :class="{'right-mode-purchase': rightMode}"
        >
          <button
          class="purchase__button"
          @click="purchase"
          >Purchase !</button>
          <p class="purchase__price">{{getCartPrice}}</p>
        </div>
    </div>

    <div v-else class="cart">
      <h2 class="empty-title h2Item">Your cart is empty ...</h2>
      <hr class="hrItem">
      <CategorySelector />
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';
import { mapGetters, mapState, mapActions } from 'vuex';
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
      'rightMode',
    ]),
  },

  methods: {
    ...mapActions([
      'purchaseRequest',
    ]),

    purchase() {
      this.purchaseRequest();
    },
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
  bottom: 2em;
  display: flex;
  align-items: baseline;
  z-index: 100;

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
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  &__button:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}

.right-mode-purchase {
  flex-direction: row-reverse;

  button {
    margin: 0em 0em 0em 1em ;
  }
}

.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fa-shopping-cart {
  color: $purple;
  font-size: 4em;
  padding: 0.5em;
}

</style>
