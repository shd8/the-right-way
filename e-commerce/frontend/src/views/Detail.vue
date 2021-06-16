<template>
  <div class='details'>
    <h2 class="h2Item">{{currentProduct.name}}</h2>
    <hr class="hrItem">

    <DetailProduct
    v-if="getProductById(id)"
    :id='getProductById(id)._id'
    :name='getProductById(id).name'
    :price='getProductById(id).price'
    :images='getProductById(id).images'
    />

    <p class="details__price">$ {{currentProduct.price}}</p>
    <hr class="hrItem">
    <span class="details__rate">
      <p class='rate'>{{getCurrentProductRate}}</p>
      <em class="fas fa-star"></em>
    </span>
    <p class="details__stock">We have {{currentProduct.stock}} in stock!</p>
    <span class="comments-container">
      <ul
      class="comments-container__comments"
      v-for='rating in currentProduct.ratings' :key='rating._id'>
        <Comment
        :user='rating.user'
        :rating='rating.rating'
        :comment='rating.comment'
        />
      </ul>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  mapGetters, mapActions, mapState,
} from 'vuex';
import 'vue3-carousel/dist/carousel.css';

import DetailProduct from '@/components/DetailProduct.vue';
import Comment from '../components/Comment.vue';

export default defineComponent({
  name: 'Detail',
  props: ['id'],
  components: {
    Comment,
    DetailProduct,
  },
  computed: {
    ...mapGetters([
      'getCurrentProductRate',
      'getProductById',

    ]),

    ...mapState([
      'currentProduct',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProductFromApi',
    ]),
  },

  mounted() {
    this.fetchProductFromApi(this.id);
  },

});
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.h2Item {
  padding-top: 0.5em;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__price {
    font-size: 3em;
    padding: 0.5em 0em;
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

.comments-container {
  padding-bottom: 3em;

  &__comments {
    display: flex;
    justify-content: center;
  }
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

.add-to-wishlist {
  position: absolute;
  z-index: 1;
  margin: 10em 10em 0em 0em;
}

</style>
