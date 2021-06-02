<template>
  <div class='details'>
    <li>{{getCurrentProduct.name}}</li>
    <li>{{getCurrentProduct.price}}</li>
    <li>{{getCurrentProduct.stock}}</li>
    <Carousel>
        <Slide v-for="slide in getCurrentProduct.images" :key="slide">
            <img class="carousel__item" :src='slide' alt="" srcset="">
        </Slide>
        <template #addons>
        <Navigation />
        <Pagination />
        </template>
    </Carousel>
    <ul v-for='rating in getCurrentProduct.ratings' :key='rating._id'>
        <p>{{rating.user}}</p>
        <p>{{rating.rating}}</p>
        <p>{{rating.comment}}</p>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions, useStore } from 'vuex';
import 'vue3-carousel/dist/carousel.css';

import {
  Carousel,
  Navigation,
  Pagination,
  Slide,
} from 'vue3-carousel';

export default defineComponent({
  name: 'Detail',
  props: ['id'],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  computed: {
    ...mapGetters([
      'getCurrentProduct',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProductsFromApi',
    ]),
  },
  mounted() {
    const store = useStore();
    store.dispatch('fetchProductFromApi', this.id);
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.details {
  padding-top: 7em;

  li {
    list-style: none;
  }
}

.carousel {
    @include carousel;
}

.carousel__item {
    @include carouselItem;
}

@media (min-width: 600px) {
    .carousel {
      max-width: 34em;
  }

  .carousel__item {
      height: 26em;
      width: 34em;
  }
}

</style>
