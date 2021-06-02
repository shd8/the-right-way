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
        <span class='product__data'>
          <router-link class="link" :to="{ name: 'Detail', params: { id: product._id } }">
            <li class="product-name">{{product.name}}</li>
          </router-link>
          <li class="product-price">$ {{product.price}}</li>
        </span>
          <Carousel>
              <Slide v-for="slide in product.images" :key="slide">
                  <router-link class="link"
                  :to="{ name: 'Detail', params: { id: product._id } }">
                      <img class="carousel__item" :src='slide' alt="" srcset="">
                  </router-link>
              </Slide>
              <template #addons>
              <Navigation id="navigation" />
              <Pagination />
              </template>
            </Carousel>
        </div>
      </ul>
  </div>

</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css';

import {
  Carousel,
  Navigation,
  Pagination,
  Slide,
} from 'vue3-carousel';

import {
  mapActions,
  mapGetters,
  useStore,
} from 'vuex';

export default defineComponent({
  props: ['category'],
  name: 'SearchCategory',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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

.product-name {
  color: $purple;
  padding-right: 2em;
}

.product-price {
  padding: 0.5em 0em;
}

.search {
    padding-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel {
    @include carousel;
}

.carousel__item {
    @include carouselItem;
}

</style>
