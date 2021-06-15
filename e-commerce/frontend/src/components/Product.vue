<template>

  <div
  v-if='!isUserLogged'
  class="modal-heart"
  :class="{'modal-heart-right-mode': rightMode}"
  >
    <button
    class="custom-button"
    @click='handleToggleModal'>
      <em class="far fa-heart"></em>
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

  <div
  v-if='!isUserLogged'
  class="modal-cart"
  :class="{'modal-cart-right-mode': rightMode}"
  >
    <button
    class="custom-button"
    @click='handleToggleModal'>
      <em class="fas fa-dollar-sign"></em>
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
        <span class="product-name">{{name}}</span>
      </router-link>
      <span class="product-price">$ {{price}}</span>
  </div>
  <AddToWishlist
  :id='id'
  class="wishlist"
  v-if='isUserLogged'
  :class="{'right-mode-wishlist': rightMode}"
  />
  <AddToCart
  :id='id'
  class="cart"
  v-if="isUserLogged"
  :class="{'right-mode-cart': rightMode}"
  />
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
      'rightMode',
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

.modal-cart,
.modal-heart {
  button {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
}

.modal-cart {
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    margin: 0.5em 0em 0em -8em;
  }

  em {
    color: $purple;
    font-size: 1.5em;
  }
}

.modal-heart {
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    margin: 18em 0em 0em 5em;
  }

  em {
    color: $purple;
    font-size: 1.5em;
  }
}

.modal-heart-right-mode {
  button {
    margin: 18em 0em 0em -8.5em;
  }
}

.modal-cart-right-mode {
  button {
    margin: 0.5em 0em 0em 5.5em;
  }
}

.modalized-login {
  background-color: white;
  border-radius: 1em;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

.cart,
.wishlist {
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.cart {
  position: absolute;
  z-index: 1;
  margin: 0.5em 13.5em 0em 0em;
}

.wishlist {
  position: absolute;
  z-index: 1;
  margin: 18em 0em 0em 14em;
}

.right-mode-cart {
  margin: 0.5em 0em 0em 13.5em;
}

.right-mode-wishlist {
  margin: 18em 14em 0em 0em;
}

</style>
