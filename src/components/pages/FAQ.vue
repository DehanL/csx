<template lang="pug">
  b-container.page-container
    .page-header
      h1 Frequently Asked Questions
    div.faq-group(role='tablist', v-for='question in questions', :key="question.id")
      hr
      a.faq-tile(href='#', v-b-toggle="'accordion-' + question.id", variant='primary')
        i.mr-3.fa.fa-plus
        span {{ question.title }}
      b-collapse(v-bind:id="'accordion-'+question.id", accordion='my-accordion', role='tabpanel')
        p.card-text.mt-3 {{question.text}}
</template>

<script>
export default {
  data() {
    return {
      text: 'this is my message to you hoo hoo',
      questions: [
        { id: '1',
          title: 'Does Swift still do standard, walk-in laundray and dry cleaning?',
          text: 'Absolutely! The online service is just another way that we are pushing the boundries. You\re more than welcome to simply swing by and drop your laundry of- business as usual.' },
        { id: '2',
          title: 'What are the store hours for Swift?',
          text: 'We keep it simple. Weekdays 9-5' },
        { id: '3',
          title: 'When will the Swift online app be available?',
          text: 'Watch this space. Online laundry will be in your hands before the end of 2019!' },
        { id: '4',
          title: 'How does the Swift online app work?',
          text: 'It\'s all pretty simple. Just create an account, place order, and select a pick-up time. We will send a driver to come fetch your clothes and the rest is pretty much our problem!' },
        { id: '5',
          title: 'How do I know if my clothes are done?',
          text: 'You can track your order as it goes through the motions- right here! When everything is done, we will send over a text for you to choose a delivery slot.' },
        { id: '6',
          title: 'How do I pay for my washing?',
          text: 'On your order page, you can pay with any credit card using the online portal. If swiping is more your thing, we will simply send a card machine with delivery.' },
        { id: '7',
          title: 'Will my threads be safe?',
          text: 'Good question! We\'ve been washing stuff in CT for years and years and years now. You can rest assured that we take great pride in being an industry leader in quality and professionalism.' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .faq-group{
    width: 100%;
    .faq-tile{
      color: $primary;
      display: block;
      width: 100%;
    }
  }

</style>
