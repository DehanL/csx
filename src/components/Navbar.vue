<template lang="pug">
  b-navbar.shadow(toggleable='lg', variant='white', type='light', sticky)
    b-container
      b-navbar-brand(:to="{name:'home'}")
        img.nav-brand-img(src='../assets/images/icon.svg')
      b-navbar-toggle(target='nav_collapse')
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          router-link(:to="{name: 'pricing'}", role="button") Pricing
          router-link(:to="{name:'faq'}") FAQ
        b-navbar-nav.ml-auto
          //b-nav-item(href='#')
            router-link(:to="{name:'faq'}")
              i.fa.fa-question
          //b-nav-item(href='#')
            router-link(:to="{name:'contact'}")
              i.fa.fa-phone
          b-nav-item(v-show="status.loggedIn")
            a(href="")
              i.mr-2.fa.fa-user
              span Dehan Louw
          b-nav-item(href='#')
            b-button(variant="outline-primary", @click="logout", v-show="status.loggedIn") Logout
          b-nav-item(href='#')
            router-link(:to="{name:'login'}", v-show="!status.loggedIn") Login
          b-nav-item(href='#', v-show="!status.loggedIn")
            b-button(variant="outline-primary")
              router-link(:to="{name:'register'}") Register

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
