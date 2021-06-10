<template>

    <router-link
        :to="{ name: 'Detail', params: { id: id } }"
        @click="scrollToTop"
        class="product"
        >
        <img class="product__image" :src='image' alt="" srcset="">
        <span class="product__info info">
            <li class="info__name">{{name}}</li>
            <li class="info__category">{{category}}</li>
            <li class="info__price">$ {{price}}</li>
            <li class="info__rate">
                {{getRateByProductId(id)}}
                <i class="fas fa-star"></i>
            </li>
        </span>
    </router-link>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Product',
  props: ['id', 'name', 'price', 'image', 'category'],
  components: {
  },

  computed: {
    ...mapGetters([
      'getRateByProductId',
    ]),
  },

});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.product {
    background-color: white;
    display: flex;
    color: $purple;
    list-style: none;
    width: 100%;
    border: 1px solid $purple;
    border-radius: 1em;
    margin-bottom: 0.2em;
    align-items: center;

    &__image {
        min-height: 6em;
        max-height: 6em;
        max-width: 6em;
        min-width: 6em;
        margin: 0.1em 1em 0.2em 0.3em;
        border-radius: 1em 1em 0em 1em;
        object-fit: contain;
    }
}

.info {
    display: flex;
    flex-direction: column;
    align-self: center;

    &__name,
    &__category,
    &__price,
    &__rate {
        padding: 0em 0em 1em 2em;
    }

    &__name {
        padding-top: 1em;
    }
}

@media (min-width: 750px) {
    .info {
        flex-direction: row;
        align-items: center;
    }

    .product__image {
        min-height: 6em;
        max-height: 6em;
        max-width: 6em;
        min-width: 6em;
    }

    .info__name {
        font-size: 2em;
        padding-left: 1em;
        padding-top: 0.2em;
    }

    .info__category,
    .info__price,
    .info__rate {
        padding-left: 2em;
    }

}

</style>
