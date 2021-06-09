<template>
  <div>
    <Toggle v-model="value" />
  </div>
</template>

<script>
import Toggle from '@vueform/toggle';

export default {
  components: {
    Toggle,
  },
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style src="@vueform/toggle/themes/default.css">

</style>
