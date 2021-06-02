<template>
<div class="search">
<p>Search works with a list of ALL products</p>
  <ul v-for='product in getProducts' :key="product._id">
    <router-link class="link" :to="{ name: 'Detail', params: { id: product._id } }">
        <li>{{product.name}}</li>
    </router-link>
    <li>{{product.price}}</li>
    <li>{{product.stock}}</li>

    <Carousel>
        <Slide v-for="slide in product.images" :key="slide">
            <img class="carousel__item" :src='slide' alt="" srcset="">
        </Slide>
        <template #addons>
        <Navigation />
        <Pagination />
        </template>
    </Carousel>
  </ul>
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

.search {
  padding-top: 7em;
}

.carousel {
    max-width: 10em;
    margin: 0em 2em;
}

.carousel__item {
    max-width: 9em;
    background-color: #966BDD;
    color: #C5A5F9;
    border-radius: 1em;
    border: 1px solid $light-purple;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__viewport {
    border: 1px solid $purple;
    border-radius: 1em;
}

</style>
