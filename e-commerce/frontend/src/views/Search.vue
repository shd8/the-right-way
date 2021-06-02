<template>
<div class="search">
    <h2>All our products</h2>
    <hr>
    <div class='products'>
        <ul
        v-for='product in getProducts'
        :key="product._id"
        class="products__list"
        >
            <router-link class="link" :to="{ name: 'Detail', params: { id: product._id } }">
                <li class="product-name">{{product.name}}</li>
            </router-link>
            <li class="product-price">$ {{product.price}}</li>
            <Carousel>
                <Slide v-for="slide in product.images" :key="slide">
                    <router-link class="link"
                    :to="{ name: 'Detail', params: { id: product._id } }">
                        <img class="carousel__item" :src='slide' alt="" srcset="">
                    </router-link>
                </Slide>
                <template #addons>
                <Navigation id="navigation" />
                <Pagination />
                </template>
            </Carousel>
        </ul>
    </div>

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

h2 {
    padding: 0.5em 0em;
    padding-top: 1em;
    padding-bottom: 0.5em;
    font-size: 2em;
}

hr {
    width: 80%;
    background-color: $purple;
    border: none;
    height: 1px;
    margin-bottom: 2em;
}

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__list {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.product-name {
    color: $purple;
}

.product-price {
    padding: 0.5em 0em;
}

.search {
    padding-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel {
    max-width: 12em;
    margin: 0em 2em;

    button {
        background-color: purple;
    }
}

.carousel__item {
    height: 15em;
    width: 12em;
    object-fit: cover;
    border-radius: 1em 1em 0em 1em;
    border: 1px solid $dead-purple;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.carousel__viewport {
    border: 1px solid $light-purple;
    border-radius: 1em;
}

</style>
