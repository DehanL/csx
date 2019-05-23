<template lang="pug">
  section.content-section.text-center
    h1 CSX Control Portal
    p.text-muted Connect to a system to start a session
    router-link(:to="{name:'connect'}")
      i.mr-1.fa.fa-angle-right
      span Connect

</template>

<script>
export default {
  name: 'Settings',

};
</script>

<style lang="scss" scoped>

</style>
