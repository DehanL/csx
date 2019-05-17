<template lang="pug">
  .cta
    .container
        h1.text-white {{content.title}}
        p.text-light {{content.text}}
        b-button(v-bind:href="content.link", variant='light') {{content.button}}
</template>

<script>
export default {
  name: 'Cta',
  props: ['content'],
};
</script>

<style lang="scss" scoped>

    .cta{
        padding: 48pt 0;
        text-align: center;
    }

    .btn{
      color: black;
      background: white;
      //border-color: black;
      &:hover{
        background-color: darken(white, 10%);
      }
    }

</style>
