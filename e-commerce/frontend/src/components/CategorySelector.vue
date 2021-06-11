<template>
    <h2>Select a category to start looking products</h2>
    <div class="categories">
      <span>
        <h3 class="all">All our products</h3>
        <hr class="line hrItem">
        <router-link
        class="clothes"
        :to="{ name: 'Search' }"
        @click="scrollToTop"
        >
          <img
          class="category__image"
          src="https://i.ibb.co/52CNKnW/for-sale.jpg"
          alt="all"
          srcset=""
          >
        </router-link>
      </span>

      <span>
        <h3 class="subtitle">Leftology</h3>
        <hr class="line hrItem">
        <router-link
        class="leftology category"
        :to="{ name: 'SearchCategory', params: { category: 'leftology' } }"
        @click="scrollToTop"
        >
          <img
          class="category__image"
          src="https://i.ibb.co/6gxLC4J/tecnologia-zurdo.jpg"
          alt="leftology"
          srcset=""
          >
        </router-link>
      </span>

      <span>
        <h3 class="subtitle">Lefticians</h3>
        <hr class="line hrItem">
        <router-link
        class="lefticians category"
        :to="{ name: 'SearchCategory', params: { category: 'lefticians' } }"
        @click="scrollToTop"
        >
          <img
          class="category__image"
          src="https://i.ibb.co/yqLTYf4/instrumentos-zurdo.webp"
          alt="lefticians"
          srcset=""
          >
        </router-link>
      </span>

      <span>
        <h3 class="subtitle">Office</h3>
        <hr class="line hrItem">
        <router-link
        class="office category"
        :to="{ name: 'SearchCategory', params: { category: 'office' } }"
        @click="scrollToTop"
        >
          <img
          class="category__image"
          src="https://i.ibb.co/wNvQCsv/oficina-zurdo.jpg"
          alt="office"
          srcset=""
          >
        </router-link>
      </span>

      <span>
        <h3 class="subtitle">Kitchen</h3>
        <hr class="line hrItem">
        <router-link
        class="kitchen"
        :to="{ name: 'SearchCategory', params: { category: 'kitchen' } }"
        @click="scrollToTop"
        >
          <img
          class="category__image"
          src="https://i.ibb.co/5cTDgD9/cocina-zurdo.jpg"
          alt="kitchen"
          srcset=""
          >
        </router-link>
      </span>

      <span>
        <h3 class="subtitle">Clothes</h3>
        <hr class="line hrItem">
        <router-link
        class="clothes"
        :to="{ name: 'SearchCategory', params: { category: 'clothes' } }"
        @click="scrollToTop"
        >
          <img
          class="category__image"
          src="https://i.ibb.co/ccbDDTZ/ropa-zurdo.jpg"
          alt="clothes"
          srcset=""
          >
        </router-link>
      </span>
      </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategorySelector',
  components: {
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";
@import "../styles/mixins.scss";

*:visited {
  color: $purple;
}

h2 {
  text-align: center;
  font-size: 1em;
  padding: 1em 0em;
}

  img {
    height: 12em;
    width: 20em;
    object-fit: cover;
    border-radius: 1em 1em 0em 1em;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  img:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    padding: 0em 1em 1em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    padding: 0.2em;
    font-size: 2em;
  }

}

@media (min-width: 1300px) {
  img {
    height: 16em;
    width: 26em;
  }
}

</style>
