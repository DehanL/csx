<template lang="pug">
  div#app
    b-container.page-container
      h1 Pricing
      p.text-muted 2019 Prices
      b-container
        h2 Dry Cleaning
        content-loader(v-if="!pricelist.dryclean.length", :height="7")
        b-table(hover, :items="pricelist.dryclean", :fields="fields", thead-class='d-none')
        h2 Bedding
        content-loader(v-if="!pricelist.bedding.length", :height="7")
        b-table(hover, :items="pricelist.bedding", :fields="fields", thead-class='d-none')
        h2 Household
        content-loader(v-if="!pricelist.household.length", :height="7")
        b-table(hover, :items="pricelist.household", :fields="fields", thead-class='d-none')
        h2 Laundry
        content-loader(v-if="!pricelist.laundry.length", :height="7")
        b-table(hover, :items="pricelist.laundry", :fields="fields", thead-class='d-none')
</template>

<script>
import HTTP from '../../http-common';
import { ContentLoader } from 'vue-content-loader';

export default {
  name: 'app',
  components: {
    ContentLoader,
  },
  data() {
    return {
      bLoaded: false,
      pricelist: { dryclean: [], bedding: [], household: [], laundry: [] },
      fields: [{ key: 'item', label: '' },
        { key: 'type', label: '' },
        { key: 'size', label: '' },
        { key: 'price', label: '' },
        { key: 'unit', label: '', tdClass: 'text-muted' }],
    };
  },
  created() {
    this.fetchAll();
  },
  methods: {
    fetchUsers() {
      const URL = '/users/login';

      const data = {
        email: 'admin@admin.com',
        password: 'admin',
      };

      HTTP.post(URL, data)
        .then((result) => {
          this.reflections = result.data.rows;
        });
    },
    fetchAll() {
      const URi = '/pricelist';

      HTTP.get(URi, {})
        .then((result) => {
          // this.pricelist = result.data.rows;
          this.pricelist.dryclean = result.data.rows.filter(item => item.category === 'Dryclean');
          this.pricelist.bedding = result.data.rows.filter(item => item.category === 'Bedding');
          this.pricelist.household = result.data.rows.filter(item => item.category === 'Household');
          this.pricelist.laundry = result.data.rows.filter(item => item.category === 'Laundry');
        });
    },
  },
};
</script>

<style lang="scss">
  .unit_data{
    color: red !important;
  }
  .b-table{
  @media(max-width: 768px){
      font-size: 12px;
      td{
        padding: 5px !important;
      }
    }
  }
  h2{
    color: $primary;
  }

</style>

