<template>
    <span class="products__data">
        <router-link class="link" :to="{ name: 'Detail', params: { id: id } }">
            <li class="product-name">{{name}}</li>
        </router-link>
    </span>
    <button
    class='trash'
    @click="$store.commit('retrieveFromCart', id)">
        <i class="fas fa-trash"></i>
    </button>
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
  },
  computed: {
    ...mapMutations([
      'retrieveFromCart',
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
  margin: 3.2em 0em 0em 10.5em;
}

</style>
