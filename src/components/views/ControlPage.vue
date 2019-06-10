<template lang="pug">
  b-container.page-container
    b-container.bg-primary
      h2 Messages
      div(v-for='(message, index) in inbox', :key='index')
        p {{ message.payloadString }}
        p.text-muted {{ message.topic }}
    b-container.element-container
      signal-element(v-for='element in elements', :key='element.id', :element="element")
</template>

<script>

import { mapState } from 'vuex';
import SignalElement from '@/components/SignalElement';

export default {
  name: 'Control',
  components: {
    SignalElement,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('document', ['documentState', 'documentSite', 'elements']),
    ...mapState('network', ['inbox']),
  },
  // watch: {
  //   inbox() {
  //     console.log('The times they are chaning');
  //   },
  // },
  methods: {
  },
  // computed: {
  //   ...mapState('tas', ['objects']),
  // },
  created() {
    // const { ctc, system, station } = { ctc: this.$route.params.ctc, system: this.$route.params.system, station: this.$route.params.station };
    // if (ctc && system && station) {
    //   this.getObjects(ctc, system, station);
    // } else {
    // }
  },
};
</script>

<style lang="scss" scoped>
  .element-container{
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  .preview{
    width: 80px;
  }
</style>
