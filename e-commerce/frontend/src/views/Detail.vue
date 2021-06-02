<template>
  <p>Detail with ID {{id}}</p>
    <!-- <li>{{id}}</li>
    <li>{{category}}</li>
    <li>{{name}}</li>
    <li>{{price}}</li>
    <li>{{stock}}</li>
    <Carousel>
        <Slide v-for="slide in images" :key="slide">
            <img class="carousel__item" :src='slide' alt="" srcset="">
        </Slide>
        <template #addons>
        <Navigation />
        <Pagination />
        </template>
    </Carousel>
    <ul v-for='rating in ratings' :key='rating._id'>
        <p>{{rating.user}}</p>
        <p>{{rating.rating}}</p>
        <p>{{rating.comment}}</p>
    </ul> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import 'vue3-carousel/dist/carousel.css';

// import {
//   Carousel,
//   Navigation,
//   Pagination,
//   Slide,
// } from 'vue3-carousel';

export default defineComponent({
  name: 'Detail',
  props: ['id'],
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
  },
});
</script>
