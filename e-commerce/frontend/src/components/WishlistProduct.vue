<template>
    <span class="products__data">
        <router-link
        class="link"
        :to="{ name: 'Detail', params: { id: id } }"
        @click="scrollToTop"
        >
          <li class="product-name">{{name}}</li>
        </router-link>
    </span>
    <button
    class='trash'
    @click="$store.dispatch('retrieveFromUserWishlist', id)"
    :class="{'right-mode-trash': rightMode}"
    >
      <i class="fas fa-trash"></i>
    </button>
    <AddToCart
    :id='id'
    class="cart"
    :class="{'right-mode-cart': rightMode}"
    />
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
  Pagination,
  Slide,
} from 'vue3-carousel';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'WishlistProduct',
  props: ['id', 'name', 'price', 'images'],
  components: {
    Carousel,
    Slide,
    Pagination,
    AddToCart,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    ...mapActions([
      'retrieveFromUserWishlist',
    ]),

    ...mapState([
      'rightMode',
    ]),
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

button {
  background-color: white;
  width: 3em;
  height: 3em;
  border-style: none;
  border-radius: 50%;
  border: 1px solid $purple;

  &:hover {
    cursor: pointer;
  }
}

i {
  color: $purple;
  font-size: 1.5em;
}

.product-name {
  color: $purple;
  padding-bottom: 1em;
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
  margin: 2em 13.5em 0em 0em;
}

.right-mode-cart {
  margin: 2em 0em 0em 13.5em;
}

.trash {
  position: absolute;
  z-index: 1;
  margin: 19em 0em 0em 14em;
}

.right-mode-trash {
  margin: 19em 14em 0em 0em;
}

</style>
