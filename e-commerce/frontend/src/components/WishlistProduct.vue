<template>
    <span class="products__data">
        <router-link class="link" :to="{ name: 'Detail', params: { id: id } }">
            <li class="product-name">{{name}}</li>
        </router-link>
        <li class="product-price">$ {{price}}</li>
    </span>
    <button
    class='trash'
    @click="$store.commit('retrieveFromWishlist', id)">
        <i class="fas fa-trash"></i>
    </button>
    <AddToCart :id='id' class="cart" />
    <Carousel>
        <Slide v-for="slide in images" :key="slide">
            <router-link class="link"
            :to="{ name: 'Detail', params: { id: id } }">
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

import {
  Carousel,
  Navigation,
  Pagination,
  Slide,
} from 'vue3-carousel';
import { mapMutations } from 'vuex';

export default defineComponent({
  name: 'WishlistProduct',
  props: ['id', 'name', 'price', 'images'],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    AddToCart,
  },
  computed: {
    ...mapMutations([
      'retrieveFromWishlist',
    ]),
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

button {
  background-color: $light-purple;
  width: 3em;
  height: 3em;
  border-style: none;
  border-radius: 0em 1em 0em 1em;

  &:hover {
    background-color: $purple;
    cursor: pointer;
  }
}

i {
  color: white;
  font-size: 1.5em;
}

.product-name {
  color: $purple;
  padding-right: 2em;
}

.product-price {
  padding: 0.5em 0em;
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
  margin: 18.8em 10.4em 0em 0em;
}

.trash {
  position: absolute;
  z-index: 1;
  margin: 5em 0em 0em 10em;
}

</style>
