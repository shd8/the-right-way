<template>
<div class="search">
    <h2 class="h2Item">All our products</h2>
    <hr class="hrItem">
    <div class='products'>
        <ul
        v-for='product in products'
        :key="product._id"
        class="products__list"
        >
          <Product
          :id='product._id'
          :name='product.name'
          :price='product.price'
          :images='product.images' />
        </ul>
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Product from '@/components/Product.vue';

import {
  mapActions,
  mapState,
} from 'vuex';

export default defineComponent({
  components: {
    Product,
  },
  name: 'Search',
  computed: {
    ...mapState([
      'products',
      'isUserLogged',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchProductsFromApi',
    ]),
  },

  mounted() {
    this.fetchProductsFromApi();
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__data {
    display: flex;
    align-items: center;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2em;
  }
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
