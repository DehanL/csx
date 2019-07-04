<template lang="pug">
  b-navbar.shadow(toggleable='lg', variant='white', type='light', sticky)
    b-container
      b-navbar-brand(:to="{name:'home'}")
        img.nav-brand-img(src='../assets/images/icon.svg')
      b-navbar-toggle(target='nav_collapse')
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          b-nav-item
            router-link(v-if="documentStatus === 'open'", :to="{name: 'control', params: { ctc: documentSite.ctc, system: documentSite.system, station: documentSite.station }}") {{ `${documentSite.ctc} / system ${documentSite.system} / ${documentSite.station}` }}
            router-link(v-else, :to="{name: 'open'}") Open
        b-navbar-nav.ml-auto(v-if="status.loggedIn")
          b-nav-item(href='#')
            router-link(:to="{name:'settings'}", title='Settings')
              i.fa.fa-cog
          b-nav-item |
          b-nav-item(href='#', title='Notifications')
            a
              i.fa.fa-bell
          b-nav-item(href='#')
            a(:class="{active: broker.status === 'connected', busy: broker.status === 'connecting'}", @click=('toggleConnect'), title='Mqtt')
              i.fa.fa-broadcast-tower
          b-nav-item
            a(:class="{active: documentStatus === 'open'}", @click='close', title='Document')
              i.mr-2.fa.fa-file
          b-nav-item
            a(:class="{active: status.loggedIn}", @click='logout', title='User')
              i.mr-2.fa.fa-user
              span {{ user.fistname }}
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
    ...mapState('document', ['documentStatus', 'documentSite', 'elements']),
    ...mapState('network', ['broker']),
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    ...mapActions('document', ['close']),
    ...mapActions('network', ['connect', 'disconnect']),
    toggleConnect() {
      if (this.broker.status === 'connected') {
        this.disconnect();
      } else {
        this.connect();
      }
    },
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
    &.active{
      color: $primary;
    }
    &.busy{
      animation: pulse linear 0.2s infinite;
    }
  }

  // Ensure everyting is nicely centered vertically
  li{
    display: flex;
    align-items: center;
  }

  @keyframes pulse {
  from {opacity: 1.0;}
  to {opacity: 0.0;}
}
</style>
