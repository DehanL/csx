<template lang="pug">
  div
    svg(xmlns='http://www.w3.org/2000/svg', xml:lang='en', height='92px', width='134px')
      defs
      g(stroke='#000000', stroke-width='3', stroke-miterlimit='10', pointer-events='none', :class='element.bits.indications')
        circle(cx='41', cy='44', r='40', fill='#ffffff')
        path(d='M 131 44 L 80.69 44.31', fill='none')
        path(d='M 131 88 L 131 0.5', fill='none')
</template>

<script>
export default {
  name: 'Signal',
  props: ['element'],
  components: {

  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

.RGK{
  circle {
    fill: green;
  }
}

.EGK{
  circle {
    fill: red;
  }
}


</style>

