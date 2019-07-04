<template lang="pug">
    div.alert-place-holder
      .alert-bar.text-center(:class="{ showAlert: alert.show }")
        p.text-white.m-0 {{ alert.message }}
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AlertBox',
  data() {
    return {

    };
  },
  computed: {
    ...mapState('alert', ['alert']),
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.alert-place-holder{
  overflow: visible;
  position: relative;
}
.alert-bar{
  // overflow: none;
  // max-height: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all 1s ease;
  width: 100%;
  background-color:$primary;
  &.showAlert{
    // max-height: 1000px !important;
    opacity: 0.8;
    padding: 10px;
  }
}

</style>
