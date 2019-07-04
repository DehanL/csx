<template lang="pug">
  #app
    navbar
    alert-bar
    privacy-modal
    router-view
</template>

<script>
import Navbar from '@/components/Navbar';
import PrivacyModal from '@/components/PrivacyModal';
import AlertBar from '@/components/AlertBar';

export default {
  name: 'App',
  components: {
    Navbar, PrivacyModal, AlertBar,
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
