<template>
  <div class="dashboard">
    <img
    src="../images/logo.svg"
    alt="logo"
    srcset=""
    class="logo">
    <h2>Select a category to start looking products</h2>

    <div class="categories">
      <span>
        <h3 class="subtitle">Leftology</h3>
        <hr class="line">
        <router-link
        class="dashboard__leftology category"
        :to="{ name: 'Search', params: { category: 'leftology' } }"
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
        <hr class="line">
        <router-link
        class="dashboard__lefticians category"
        :to="{ name: 'Search', params: { category: 'lefticians' } }"
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
        <hr class="line">
        <router-link
        class="dashboard__office category"
        :to="{ name: 'Search', params: { category: 'office' } }"
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
        <hr class="line">
        <router-link
        class="dashboard__kitchen"
        :to="{ name: 'Search', params: { category: 'kitchen' } }"
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
        <hr class="line">
        <router-link
        class="dashboard__clothes"
        :to="{ name: 'Search', params: { category: 'clothes' } }"
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
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";

*:visited {
  color: $purple;
}

h2 {
  text-align: center;
  font-size: 1em;
  padding: 1em 0em;
}

.dashboard{
  padding-top: 9em;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  .logo{
    display: flex;
    align-self: center;
    height: 100%;
    width: 19em;
    box-shadow: none;
  }

  .logo:hover {
    box-shadow: none;
  }
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

  hr {
    width: 80%;
    background-color: #966BDD;
    border: none;
    height: 1px;
    margin-bottom: 1em;
  }
}

@media (min-width: 1300px) {
  .dashboard {
    img {
      height: 16em;
      width: 26em;
    }
  }
}

</style>
