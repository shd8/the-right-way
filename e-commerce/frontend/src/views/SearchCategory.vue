<template>
<div class="search">
  <h2>{{category.charAt(0).toUpperCase() + category.slice(1)}}</h2>
  <hr>
  <div class='products'>
      <ul
      v-for='product in getProducts'
      :key="product._id"
      class="products__list"
      >
        <div
        class='product'
        v-if="product.category && product.category.toLowerCase() === category.toLowerCase()">
          <Product
            class="products__data"
            :id='product._id'
            :name='product.name'
            :price='product.price'
            :images='product.images' />
        </div>
      </ul>
  </div>

</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css';

import {
  mapActions,
  mapGetters,
  useStore,
} from 'vuex';
import Product from '@/components/Product.vue';

export default defineComponent({
  props: ['category'],
  name: 'SearchCategory',
  components: {
    Product,
  },
  computed: {
    ...mapGetters([
      'getProducts',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProductsFromApi',
    ]),
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch('fetchProductsFromApi');
    });
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

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

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;

  &__data {
    display: flex;
    align-items: center;
  }
}

.search {
    padding-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
