<template lang="pug">
  #app
    navbar
    privacy-modal
    router-view
</template>

<script>
import Navbar from '@/components/Navbar';
import PrivacyModal from '@/components/PrivacyModal';

export default {
  name: 'App',
  components: {
    Navbar, PrivacyModal,
  },
};
</script>

<style>
  body,
  html {
    width: 100%;
    height: 100%;
  }
</style>
