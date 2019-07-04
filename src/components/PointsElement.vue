<template lang="pug">
div
  svg(xmlns='http://www.w3.org/2000/svg', xml:lang='en', height='86px', width='186px')
    defs
    g(stroke='#000000', stroke-width='5', stroke-miterlimit='10', pointer-events='none', :class='element.bits.indications')
      path.approach(d='M 2 82 L 92 82')
      path.plus(d='M 92 82 L 182 82')
      path.minus(d='M 92 82 L 172 2')

</template>

<script>
export default {
  name: 'PointsElement',
  props: ['element'],
  components: {

  },
  methods: {
    sendControl() {
      console.log('Child clicked');
      this.$emit('send-control');
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

.UK{
  stroke: yellow;
}

.TK{
  stroke: red;
}

.UKplus{
  .approach, .plus{
    stroke: yellow;
  }
}

.UKminus{
  .approach, .minus{
    stroke: yellow;
  }
}

.TKplus{
  .approach, .plus{
    stroke: red;
  }
}

.TKminus{
  .approach, .minus{
    stroke: red;
  }
}


</style>

