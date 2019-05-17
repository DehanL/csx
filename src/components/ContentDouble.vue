<template lang="pug">
  section.content-section
    b-container
      b-row(align-h='around', align-v='center')
        b-col.text-center(lg='6')
          h1 {{content.title}}
          p {{content.paragraph}}
        b-col.text-center(lg='6')
          img(v-bind:src="imgUrl")
</template>

<script>
export default {
  name: 'ContentSection',
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

img{
    width: 80%;
    max-width: 200px;
    padding: 16pt 0;

    @include desktop{
      max-width: 220px;
    }
  }

  // .expanded{
  //   padding: 72pt 0;
  // }

  // .expanded__inner{
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   flex-direction: column;

  //   @include desktop{
  //     flex-direction: row;
  //   }
  // }

  // .expanded__media{
  //   order: 1;
  //   text-align: center;
  //   @include desktop{
  //     width: 50%;
  //     flex-shrink: 0;
  //     order: unset;
  //   }
  // }

  // .expanded__content{
  //   order: 2;
  //   @include desktop{
  //     padding: 0 16pt;
  //     width: 50%;
  //     flex-shrink: 0;
  //     order: unset;
  //   }

  // }

  // .expanded:nth-child(even){
  //   .expanded__media{
  //     order: 1;

  //     @include desktop{
  //       order: 1;
  //     }
  //   }
  // }

  // /* Actual content */
  // .expanded__image{
  //   width: 90%;
  //   max-width: 220px;
  //   padding: 16pt 0;

  //   @include desktop{
  //     max-width: 280px;
  //   }
  // }

  // .expanded__title{
  //   max-width: 550px;
  // }

  // .expanded__text{
  //   max-width: 60ch;
  // }

</style>
