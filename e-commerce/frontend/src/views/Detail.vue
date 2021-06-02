<template>
<div class='details'>

</div>
  <p>Detail with ID {{id}}</p>
    <li>{{getCurrentProduct}}</li>
    <li>{{getCurrentProduct._id}}</li>
    <li>{{getCurrentProduct.category}}</li>
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
}

.carousel {
    @include carousel;
    max-width: 34em;
}

.carousel__item {
    @include carouselItem;
    height: 26em;
    width: 34em;
}

</style>
