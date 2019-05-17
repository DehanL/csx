<template lang="pug">
    b-container.page-container
      .page-header
        h1 Contact Us
        hr
      b-row
        b-col(md='4')
          h2 Swift Dry Cleaning
          div.p-2
            i.mr-2.fa.fa-mobile-alt
            span.text-muted 082 5555 555
          div.p-2
            i.mr-2.fa.fa-envelope
            span.text-muted info@swiftdc.co.za
          div.p-2
            i.mr-2.fa.fa-thumbtack.d-inline-block.align-top
            div.d-inline-block
              span.text-muted 92 Kloof Street
              br
              span.text-muted Cape Town
        b-col(md='8')
          h2 Partner with Swift
          div.members.p-2
            .member.text-center
              .avatar.mx-auto
                .overlay.bg-primary
                img(src='../../assets/images/avatar.png')
              h2.my-1 Herman Carstens
              span.text-muted
                i.mr-1.fa.fa-envelope
                a(href="mailto:dehanlouw@icloud.com") Managing Director
            .member.text-center
              .avatar.mx-auto
                .overlay.bg-primary
                img(src='../../assets/images/avatar.png')
              h2.my-1 Niel
              span.text-muted
                i.mr-1.fa.fa-envelope
                a(href="mailto:dehanlouw@icloud.com") Managing Director
            //.member.text-center
              .avatar.mx-auto
                .overlay.bg-primary
                img(src='../../assets/images/avatar.png')
              h2.my-1 Iemand Anders
              p Chief Financial Officer

</template>

<script>
export default {
  name: 'ContactUs',
};
</script>

<style lang="scss" scoped>

  .members {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    .member {
       .avatar{
        position: relative;
        overflow: hidden;
        background-color: blue;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        .overlay{
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          opacity: 0.4;
        }
      }
    }
  }


</style>
