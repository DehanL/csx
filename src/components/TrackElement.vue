<template lang="pug">
  svg(xmlns='http://www.w3.org/2000/svg', xml:lang='en', height='6px', width='206px')
    defs
    g(stroke='#000000', stroke-width='5', stroke-miterlimit='10', pointer-events='none', :class='element.bits.indications')
      path(d="M 2 2 L 202 2")
</template>

<script>
export default {
  name: 'TrackElement',
  props: ['element'],
  components: {

  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
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

</style>

