<template lang="pug">
    b-container.page-container
      div.form-screen.mx-auto
        h2 Open a station
        form.row(@submit.prevent='handleSubmit')
          .col-4
            b-form-group#input-group-3(label='CTC', label-for='input-ctc')
              b-form-select#input-ctc(v-model='form.ctc', :options='ctcs', required='', @change='getSystems')
          .col-4
            b-form-group#input-group-4(label='System', label-for='input-system')
              b-form-select#input-system(v-model='form.system', :options='systems', required='', @change='getStations')
          .col-4
            b-form-group#input-group-5(label='Station', label-for='input-station')
              b-form-select#input-station(v-model='form.station', :options='stations', required='')
          .col-12
            b-button(type='submit', variant='primary', :disabled='!formComplete') Open
            img(v-show="documentStatus === 'opening'", src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==')
</template>

<script>

import { apiService } from '../../services/api.service';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      ctcs: [],
      systems: [],
      stations: [],
      form: {
        ctc: '',
        system: '',
        station: '',
      },
    };
  },
  computed: {
    ...mapState('network', ['broker']),
    ...mapState('settings', ['mqtt']),
    ...mapState('document', ['documentStatus', 'documentSite', 'elements']),
    formComplete() {
      return (this.form.ctc !== '' && this.form.system !== '' && this.form.station !== '');
    },
  },
  created() {
    this.getCtcs();
  },
  methods: {
    ...mapActions('document', ['open']),
    handleSubmit() {
      const { ctc, system, station } = this.form;
      if (ctc && system && station) {
        this.open({ ctc, system, station });
      }
    },
    getCtcs() {
      apiService.getCtcs()
        .then((data) => {
          this.ctcs = [];
          Object.values(data).forEach((value) => {
            this.ctcs.push(value.ctc);
          });
        },
        );
    },
    getSystems(ctc) {
      if (ctc !== '') {
        apiService.getSystems(ctc)
          .then((data) => {
            this.systems = [];
            Object.values(data).forEach((value) => {
              this.systems.push(value.system);
            });
          },
          );
        this.form.system = '';
      }
    },
    getStations(system) {
      if (this.form.ctc !== '' || system !== '') {
        apiService.getStations(this.form.ctc, system)
          .then((data) => {
            this.stations = [];
            Object.values(data).forEach((value) => {
              this.stations.push(value.code);
            });
          },
          );
        this.form.station = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
