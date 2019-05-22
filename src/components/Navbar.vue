<template lang="pug">
  b-navbar.shadow(toggleable='lg', variant='white', type='light', sticky)
    b-container
      b-navbar-brand(:to="{name:'home'}")
        img.nav-brand-img(src='../assets/images/icon.svg')
      b-navbar-toggle(target='nav_collapse')
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          router-link(:to="{name: 'connect'}") Connect
        b-navbar-nav.ml-auto
          b-nav-item(href='#')
            a
              i.fa.fa-cog
          b-nav-item(href='#')
            a
              i.fa.fa-bell
          b-nav-item(href='#')
            a
              i.fa.fa-bullseye
          b-nav-item(v-show="status.loggedIn")
            a(href="")
              i.mr-2.fa.fa-user
              span Dehan Louw

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapState('account', ['status']),
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
  },
};
</script>

<style lang="scss">
  .nav-brand-img{
    height: $navbar-height;
  }
  a{
    padding: 10px;
  }

  .navbar a{
    color: inherit;
  }

  // Ensure everyting is nicely centered vertically
  li{
    display: flex;
    align-items: center;
  }
</style>
