<template>
    <div
    class="right-toggle"
    :class="{'right-mode-toggle': rightMode}"
    >
        <p>Right mode</p>
        <i
        class="far fa-hand-paper"
        :class="['', rightClass]"
        ></i>

        <div>
            <Toggle
            v-model="value"
            @change="$store.commit('changeRightMode')"
            />
        </div>
    </div>

</template>

<script>
import Toggle from '@vueform/toggle';
import { mapState } from 'vuex';
import '@vueform/toggle/themes/default.css';

export default {
  components: {
    Toggle,
  },

  computed: {
    ...mapState([
      'rightMode',
    ]),

    rightClass() {
      return this.rightMode ? '' : 'right';
    },

  },

  data() {
    return {
      value: false,
    };
  },
};
</script>

<style lang="scss" scoped>

.right-toggle {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.right-mode-toggle {
  justify-content: flex-start;
}

.right {
  transform: rotateY(180deg);
}

.fa-hand-paper {
  padding: 0em 1em;
}

</style>
