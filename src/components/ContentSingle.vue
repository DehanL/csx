<template lang="pug">
  section.content-section.landing_section
    b-container.content-container.text-center
      img.content-img(v-bind:src="imgUrl")
      h1.mx-auto {{content.title}}
      p.mx-auto {{content.paragraph}}
</template>

<script>
export default {
  name: 'ContentSingle',
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

</style>
