<template>
    <span class="products__data">
        <router-link
        class="link"
        :to="{ name: 'Detail', params: { id: id } }"
        @click="scrollToTop"
        >
          <span class="product-name">{{name}}</span>
        </router-link>
    </span>
    <button
    class='trash custom-button'
    @click="$store.dispatch('retrieveFromUserWishlist', id)"
    :class="{'right-mode-trash': rightMode}"
    >
      <em class="fas fa-trash"></em>
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
              <img class="carouselItem" :src='slide' alt="" srcset="">
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

em {
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

.cart {
  position: absolute;
  z-index: 1;
  margin: 1.5em 13.5em 0em 0em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.right-mode-cart {
  margin: 1.5em 0em 0em 13.5em;
}

.trash {
  position: absolute;
  z-index: 1;
  margin: 19em 0em 0em 14em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.right-mode-trash {
  margin: 19em 14em 0em 0em;
}

.products__data {
  margin-bottom: 1em;
}

</style>
