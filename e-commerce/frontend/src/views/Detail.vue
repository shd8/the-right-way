<template>
  <div class='details'>
    <h2>{{getCurrentProduct.name}}</h2>
    <hr>
    <Carousel>
        <Slide v-for="slide in getCurrentProduct.images" :key="slide">
            <img class="carousel__item" :src='slide' alt="" srcset="">
        </Slide>
        <template #addons>
        <Navigation />
        <Pagination />
        </template>
    </Carousel>
    <p class="details__price">$ {{getCurrentProduct.price}}</p>
    <hr>
    <span class="details__rate">
      <p class='rate'>{{getCurrentProductRate}}</p>
      <i class="fas fa-star"></i>
    </span>
    <p class="details__stock">We have {{getCurrentProduct.stock}} in stock!</p>
    <ul
    class="comments"
    v-for='rating in getCurrentProduct.ratings' :key='rating._id'>
      <Comment
      :user='rating.user'
      :rating='rating.rating'
      :comment='rating.comment'
      />
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

import Comment from '../components/Comment.vue';

export default defineComponent({
  name: 'Detail',
  props: ['id'],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Comment,
  },
  computed: {
    ...mapGetters([
      'getCurrentProductRate',
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

hr {
  @include hrItem;
}

h2 {
  @include h2Item;
}

.details {
  padding-top: 7em;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__price {
    font-size: 3em;
    padding-top: 0.5em;
  }

  &__rate {
    font-size: 2em;
    display: flex;
    align-items: center;
    padding-bottom: 1em;

  }

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

.comments {
  display: flex;
  justify-content: center;
}

.rate {
  padding-right: 0.2em;
}

.details__stock {
  margin-bottom: 1em;
}

.fa-star {
  color: $light-purple;
}

</style>
