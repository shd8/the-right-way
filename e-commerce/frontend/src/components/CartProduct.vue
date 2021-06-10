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
    :class="{'right-mode-trash': rightMode}"
    @click="$store.dispatch('retrieveFromUserCart', id)">
        <i class="fas fa-trash"></i>
    </button>
    <Carousel>
        <Slide v-for="slide in images" :key="slide">
            <router-link class="link"
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
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {

    ...mapActions([
      'retrieveFromUserCart',
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

.trash {
  position: absolute;
  z-index: 1;
  margin: 2em 14em 0em 0em;
}

.right-mode-trash {
  margin: 2em 0em 0em 14em;
}

</style>
