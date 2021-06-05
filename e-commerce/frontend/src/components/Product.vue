<template>
    <span class="products__data">
        <router-link
        class="link"
        :to="{ name: 'Detail', params: { id: id } }"
        @click="scrollToTop"
        >
            <li class="product-name">{{name}}</li>
        </router-link>
        <li class="product-price">$ {{price}}</li>
    </span>
    <AddToWishlist :id='id' class="wishlist"/>
    <AddToCart :id='id' class="cart" />
    <Carousel>
        <Slide v-for="slide in images" :key="slide">
            <router-link
            class="link"
            :to="{ name: 'Detail', params: { id: id } }"
            @click="scrollToTop"
            >
                <img class="carousel__item" :src='slide' alt="" srcset="">
            </router-link>
        </Slide>
        <template #addons>
        <Navigation id="navigation" />
        <Pagination />
        </template>
    </Carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import AddToCart from '@/components/AddToCart.vue';
import AddToWishlist from '@/components/AddToWishlist.vue';

import {
  Carousel,
  Navigation,
  Pagination,
  Slide,
} from 'vue3-carousel';

export default defineComponent({
  name: 'Product',
  props: ['id', 'name', 'price', 'images'],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    AddToCart,
    AddToWishlist,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.product-name {
    color: $purple;
    text-align: center;
}

.product-price {
    padding: 0.5em 0em;
    text-align: center;
}

.carousel {
    @include carousel;
}

.carousel__item {
    @include carouselItem;
}

.cart {
    position: absolute;
    z-index: 1;
    margin: 18.5em 0em 0em 10em;
}

.wishlist {
    position: absolute;
    z-index: 1;
    margin: 5em 10em 0em 0em;
}

</style>
