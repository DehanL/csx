<template lang="pug">
  b-container.page-container#elements
    b-container.element-container
      element-node(v-for='element in elements', :key='element.id', :element="element")

</template>

<script>

import { mapState } from 'vuex';
import ElementNode from '@/components/ElementNode';

export default {
  name: 'Control',
  components: {
    ElementNode,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    ...mapState('document', ['documentState', 'documentSite', 'elements']),
    ...mapState('account', ['user']),
  },
  created() {
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
#elements{
    .popover{
    h3 {
      margin: 0px !important;
      padding: 0px;
    }
  }
}
</style>
