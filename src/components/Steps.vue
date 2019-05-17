<template lang="pug">
  section.content-section
    b-container.text-center
      h1 {{content.title}}
      p {{content.text}}
      b-row
        b-col.step.text-center(lg="4")
          img(v-bind:src="makeImgUrl(content.step1.img)")
          h2 {{content.step1.title}}
          p {{content.step1.text}}
        b-col.step.text-center(lg="4")
          img(v-bind:src="makeImgUrl(content.step2.img)")
          h2 {{content.step2.title}}
          p {{content.step2.text}}
        b-col.step.text-center(lg="4")
          img(v-bind:src="makeImgUrl(content.step3.img)")
          h2 {{content.step3.title}}
          p {{content.step3.text}}
</template>

<script>
export default {
  name: 'Steps',
  props: ['content'],
  data() {
    return {
    };
  },
  methods: {
    makeImgUrl(name) {
      return require(`../assets/images/${name}`);
    },
  },
};
</script>

<style lang="scss">

.step{
  img{
    max-height: 100px;
    max-width: 222px;
    margin-top: 8pt;
    @include noDragging;

    @include tablet{
      max-width:none;
    }
  }
  h4{

  }
  P{
    margin-left: auto;
    margin-right: auto;
    max-width: 30ch;
  }
}

</style>
