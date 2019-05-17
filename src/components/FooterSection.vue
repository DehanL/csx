<template lang="pug">
  div
    b-card.footer.p-3
      b-container
        b-row
          b-col.d-flex.align-items-center.justify-content-center(md='4')
            img.icon(src="../assets/images/logo_vector_light.svg")
          b-col(cols='6', md='4')
            ul(style="list-style-type:none")
              li
                h3 Navigate
              li
                router-link(:to="{name:'pricing'}") Pricing
              li
                router-link(:to="{name:'faq'}") FAQ
              li
                router-link(:to="{name:'contact'}") Contact Us
              //li
                router-link(:to="{name:'ApiTest'}") API Test
              //li
                a(href='') Signup
          b-col(cols='6', md='4')
            ul.no-bullets
              li
                h3 Social
              li
                a(href='') Facebook
              li
                a(href='') Instagram
              li
                a(href='') Twitter
      div(slot="footer")
        ul.no-bullets.inline-list.my-0
          // li
            a Terms of use
          li
            a(v-b-modal.privacyModal='') Privacy Policy
          li
            a(href='https://www.tourmaletmedia.com') © 2019 TOURMALET MEDIA
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss" scoped>

  .footer{
    padding: 0px !important;
    background-color: white;
    //@include bgPrimaryGradient;
    .card-footer{
      padding: 0px;
      //@include bgPrimaryGradient;
      background-color: white;
    }
    .icon{
      width: 150px;
    }
  }


</style>
