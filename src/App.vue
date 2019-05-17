<template lang="pug">
  #app
    navbar
    privacy-modal
    router-view
    footer-section
</template>

<script>
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import PrivacyModal from '@/components/PrivacyModal';

export default {
  name: 'App',
  components: {
    Navbar, FooterSection, PrivacyModal,
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
