<template>
    <span class="product">
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
    :class="{'right-mode-trash': rightMode}"
    @click="retrieveFromUserCart(id)">
        <em class="fas fa-trash"></em>
    </button>
    <Carousel>
        <Slide v-for="slide in images" :key="slide">
            <router-link
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

    ...mapActions([
      'retrieveFromUserCart',
    ]),
  },
  computed: {

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

.product {
  margin-bottom: 1em;
}

.product-name {
  color: $purple;
  padding-bottom: 1em;
}

.product-price {
  padding: 1.5em 0em;
}

.trash {
  position: absolute;
  z-index: 1;
  margin: 1.5em 14em 0em 0em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.right-mode-trash {
  margin: 1.5em 0em 0em 14em;
}

</style>
