<template lang="pug">
  b-navbar.shadow(toggleable='lg', variant='white', type='light', sticky)
    b-container
      b-navbar-brand(:to="{name:'home'}")
        img.nav-brand-img(src='../assets/images/icon.svg')
      b-navbar-toggle(target='nav_collapse')
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          router-link(:to="{name: 'connect'}", v-show="status.loggedIn") Connect
        b-navbar-nav.ml-auto(v-if="status.loggedIn")
          b-nav-item(href='#')
            router-link(:to="{name:'settings'}")
              i.fa.fa-cog
          b-nav-item(href='#')
            a
              i.fa.fa-bell
          b-nav-item(href='#')
            a
              i.fa.fa-bullseye
          b-nav-item
            a.live(@click='logout')
              i.mr-2.fa.fa-user
              span {{ user.id }}
        b-navbar-nav.ml-auto(v-else)
          b-nav-item(v-show="!status.loggedIn")
            router-link(:to="{name:'login'}")
              b-button(variant="outline-primary", v-show="!status.loggedIn") Login

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapState('account', ['status', 'user']),
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
    &.live{
      color: $primary;
    }
  }

  // Ensure everyting is nicely centered vertically
  li{
    display: flex;
    align-items: center;
  }
</style>
