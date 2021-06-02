<template>
<div class="search">
    <h2>All our products</h2>
    <hr>
    <div class='products'>
        <ul
        v-for='product in getProducts'
        :key="product._id"
        class="products__list"
        >
            <router-link class="link" :to="{ name: 'Detail', params: { id: product._id } }">
                <li class="product-name">{{product.name}}</li>
            </router-link>
            <li class="product-price">$ {{product.price}}</li>
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
        </ul>
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
  name: 'Search',
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
    store.dispatch('fetchProductsFromApi');
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

h2 {
    padding: 0.5em 0em;
    padding-top: 1em;
    padding-bottom: 0.5em;
    font-size: 2em;
}

hr {
    width: 80%;
    background-color: $purple;
    border: none;
    height: 1px;
    margin-bottom: 2em;
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

.product-name {
    color: $purple;
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
