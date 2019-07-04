<template lang="pug">
  div.m-3(:id='`pop-${element.id}`', @click="show = !show")
    b-popover(:target='`pop-${element.id}`', :show.sync="show", placement="top")
      div.d-flex
        a.control(v-for="(value, property) in element.bits.controls", :key="`${element.id}-${property}`", @click="pressControl({element: element.id, bit: property})") {{ property }}
    signal-element(v-if="element.type == 'Signal'", :element='element')
    track-element.el(v-else-if="element.type == 'Track'", :element='element', v-on:press-control="pressControl")
    points-element(v-else-if="element.type == 'Points'", :element='element')
    div(v-else="")
      h2 Element Not Supported
</template>

<script>

import TrackElement from '@/components/TrackElement';
import SignalElement from '@/components/SignalElement';
import PointsElement from '@/components/PointsElement';
import { mapActions } from 'vuex';

export default {
  name: 'ElementNode',
  props: ['element'],
  components: {
    SignalElement,
    TrackElement,
    PointsElement,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    ...mapActions('document', ['sendControl']),
    pressControl(control) {
      this.show = false;
      this.sendControl(control);
    },
  },
};
</script>

<style lang="scss" scoped>
.control{
  margin: 2px;
  color: white !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: $primary;
  border-radius: 50%;
  &:hover{
    background-color: darken(blue, 20);
    box-shadow: 4px -2px 30px 0px rgba(0,0,0,0.75);
  }
}

</style>

