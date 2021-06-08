<template>

  <div v-if='!isUserLogged' class="modal">
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

  <div class="products__data">
      <router-link
      class="link"
      :to="{ name: 'Detail', params: { id: id } }"
      @click="scrollToTop"
      >
        <li class="product-name">{{name}}</li>
      </router-link>
      <li class="product-price">$ {{price}}</li>
  </div>
  <AddToWishlist :id='id' class="wishlist" v-if='isUserLogged'/>
  <AddToCart :id='id' class="cart" />
  <Carousel>
      <Slide v-for="slide in images" :key="slide">
          <router-link
          class="link"
          :to="{ name: 'Detail', params: { id: id } }"
          @click="scrollToTop"
          >
              <img class="carousel__item" :src='slide' alt="" srcset="">
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
import AddToCart from '@/components/AddToCart.vue';
import AddToWishlist from '@/components/AddToWishlist.vue';
import LoginRegister from '@/components/LoginRegister.vue';
import Modal from '@/components/Modal.vue';

import {
  Carousel,
  Pagination,
  Slide,
} from 'vue3-carousel';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Product',
  props: ['id', 'name', 'price', 'images'],
  components: {
    Carousel,
    Slide,
    Pagination,
    AddToCart,
    AddToWishlist,
    LoginRegister,
    Modal,
  },

  computed: {
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

.product-name {
    color: $purple;
    text-align: center;
}

.modal {
  button {
    background-color: $light-purple;
    width: 3em;
    height: 3em;
    border-style: none;
    border-radius: 1em 0em 1em 0em;
    position: absolute;
    z-index: 2;
    margin: 5em 0em 0em -6.5em;

    &:hover {
      background-color: $purple;
      cursor: pointer;
    }
  }

  i {
    color: white;
    font-size: 1.5em;
  }
}

.modalized-login {
  background-color: white;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal--displayed {
  padding-top: 5em;
}

.product-price {
    padding: 0.5em 0em;
    text-align: center;
}

.carousel {
    @include carousel;
}

.carousel__item {
    @include carouselItem;
}

.cart {
  position: absolute;
  z-index: 1;
  margin: 18.5em 0em 0em 10em;
}

.wishlist {
  position: absolute;
  z-index: 1;
  margin: 5em 10em 0em 0em;
}

</style>
