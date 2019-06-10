<template lang="pug">
  b-card.m-2.element-card
    div.text-center(slot='header')
      h4 {{ element.name }}
    div.body.text-center
      img.preview(src="@/assets/images/signal.png")
    div.text-center(slot='footer')
      a(v-b-toggle='`sig-card${element.name}`')
        i.fa.fa-angle-down
      b-collapse(:id='`sig-card${element.name}`')
        p.text-primary Controls
        div(v-for='(item, index) in element.bits.controls')
          p {{ `${index}: ${item}` }}
        p.text-primary Indications
        div(v-for='(item, index) in element.bits.indications')
          p {{ `${index}: ${item}` }}
</template>

<script>
export default {
  name: 'SignalElement',
  props: ['element'],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

</style>

