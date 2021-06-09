<template>

  <div v-if='!isUserLogged' class="modal-heart">
    <button @click='handleToggleModal'>
      <i class="far fa-heart"></i>
    </button>
      <Modal
      :isModalOpen="showModal"
      @toggleModal='toggleModal'
      >
        <div class="modalized-login">
          <LoginRegister />
        </div>
      </Modal>
  </div>

  <div v-if='!isUserLogged' class="modal-cart">
    <button @click='handleToggleModal'>
      <i class="fas fa-dollar-sign"></i>
    </button>
      <Modal
      :isModalOpen="showModal"
      @toggleModal='toggleModal'
      >
        <div class="modalized-login">
          <LoginRegister />
        </div>
      </Modal>
  </div>

  <AddToWishlist :id='id' class="wishlist" v-if='isUserLogged'/>
  <AddToCart :id='id' class="cart" v-if="isUserLogged"/>

  <Carousel>
      <Slide v-for="slide in images" :key="slide">
        <img class="carousel__item" :src='slide' alt="" srcset="">
      </Slide>
      <template #addons>
      <Pagination />
      </template>
  </Carousel>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import Modal from '@/components/Modal.vue';
import LoginRegister from '@/components/LoginRegister.vue';
import AddToWishlist from '@/components/AddToWishlist.vue';
import AddToCart from '@/components/AddToCart.vue';

import {
  Carousel,
  Pagination,
  Slide,
} from 'vue3-carousel';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'DetailProduct',
  props: ['id', 'name', 'price', 'images'],
  components: {
    Carousel,
    Slide,
    Pagination,
    Modal,
    LoginRegister,
    AddToWishlist,
    AddToCart,
  },

  computed: {
    ...mapActions([
      'retrieveFromUserWishlist',
    ]),

    ...mapState([
      'isUserLogged',
    ]),
  },

  methods: {

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },

    handleToggleModal() {
      this.toggleModal();
    },
  },

  data() {
    return {
      showModal: false,
    };
  },

});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

button {
  background-color: white;
  width: 3em;
  height: 3em;
  border-style: none;
  border-radius: 50%;
  border: 1px solid $purple;

  &:hover {
    cursor: pointer;
  }
}

i {
  color: $purple;
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

.wishlist {
  position: absolute;
  margin: 2em 13.5em 0em 0em;
}

@media (min-width: 600px) {
    .carousel {
      max-width: 34em;
  }

  .carousel__item {
    height: 26em;
    width: 34em;
  }

  .add-to-wishlist {
    margin: 10em 36em 0em 0em;
  }
}

</style>
