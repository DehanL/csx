<template lang="pug">
    div
      hero(v-bind:content='contents.Hero')
      content-single.bg-even(v-bind:content="contents.ContentIntro")
      cta.bg-primary(v-bind:content="contents.CtaSignUp")
      content-double.bg-even(v-bind:content="contents.ContentComingSoon")
      steps.bg-odd(v-bind:content="contents.StepsOnline")
      cta.bg-primary(v-bind:content="contents.CtaInStore")
</template>

<script>
import Hero from '@/components/Hero';
import ContentSingle from '@/components/ContentSingle';
import ContentDouble from '@/components/ContentDouble';
import Steps from '@/components/Steps';
import Cta from '@/components/Cta';

const articles = {
  Hero: {
    title: 'It\'s like laundry- but way, way better!',
    img: 'washer.svg',
  },
  ContentIntro: {
    title: 'Tried. Trusted. Certified Awesome.',
    paragraph: 'Swift Dry Cleaners are a tech-centric service obsessed with creating the ultimate no-sweat laundry experience. Don\'t be fooled though- this is not our first rodeo! With more than 20 years of experience, your threads are in expert hands at Swift',
    img: 'washer.svg',
  },
  ContentComingSoon: {
    title: 'Coming Soon!',
    paragraph: 'Who said laundry can\'t be cool? Our new online web app let\'s you automates the whole thing. Built on the latest web technologies, it\'s quick, seamless and oh so simple.',
    img: 'iphone.png',
  },
  StepsOnline: {
    title: 'How it all works',
    text: 'Book it. Track it. Get it.',
    step1: {
      title: 'Book',
      text: 'Book your order online and tell us when our drone can swing by. Okay fine, it\'s not going to be a drone. Yet...',
      img: 'drone_delivery.svg',
    },
    step2: {
      title: 'Track',
      text: 'View live updates of how far your laundry is. You can also pay so long- or simply swipe on delivery.',
      img: 'track_order.svg',
    },
    step3: {
      title: 'Ding Dong!',
      text: 'Pick a convenient delivery time once your order is done. Your minty fresh threads will simply show up. As if by magic!',
      img: 'undraw_order_confirmed.svg',
    },
  },
  CtaSignUp: {
    title: 'Transparent pricing. No surprises.',
    text: 'Being consumer driven- our rates are always competitive',
    button: 'View Pricing',
    link: 'pricing',
  },
  CtaInStore: {
    title: 'Feeling old school?',
    text: 'We\'re still very proud of our good old \'brick and mortar\' laundry as well. You\'re always welcome to simply drop and pick up your clothes yourself.',
    button: 'Visit Us',
    link: 'contact',
  },

};

export default {
  name: 'Home',
  components: {
    Hero, ContentSingle, ContentDouble, Steps, Cta,
  },
  data() {
    return {
      contents: articles,
    };
  },
};
</script>

<style scoped>
</style>
