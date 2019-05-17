<template lang="pug">
  .hero
    .bg
    .hero-content.text-center
      h1.hero-title {{content.title}}
      //div.typing-wrapper
        vue-typer.typing-title.text-white(:text='[" quicker!"," easier!", " cooler!"]', erase-style='select-back', :erase-delay='100')
</template>

<script>

// import { VueTyper } from 'vue-typer';

export default {
  name: 'hero',
  components: {
    // VueTyper,
  },
  props: ['content'],
  data() {
    return {

    };
  },
  computed: {
    imgUrl() {
      return require(`../assets/images/${this.content.img}`);
    },
  },
};
</script>

<style lang="scss" scoped>

     .hero{
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 0;
      position: relative;
      width: 100%;
      height: calc(100vh - #{$navbar-height});
      box-shadow: $hero-shadow;
      .bg{
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("./../assets/images/tylernix.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      .hero-content{
        z-index: 1;
      }
      .hero-title{
        font-family: inherit;
        color: black;
        font-size: 50px;
        display: inline-block;
        margin: 0;
      }
    }

</style>
