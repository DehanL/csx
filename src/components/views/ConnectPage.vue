<template lang="pug">
    //b-container.page-container
      div.form-screen.mx-auto
        h2 Connect to CTC
        form(@submit.prevent='handleSubmit')
          .form-group
            label(for='id') id
            input.form-control(type='text', v-model='id', name='id', :class="{ 'is-invalid': submitted && !id }")
            .invalid-feedback(v-show='submitted && !id') id is required
          b-form-group#input-group-3(label='Food:', label-for='input-3')
            b-form-select#inputCtc(v-model='form.food', :options='foods', required='')
          .form-group
            button.btn.btn-primary(:disabled='status.loggingIn') Connect
            img(v-show='status.loggingIn', src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==')
            router-link.btn.btn-link(to='/register') Cancel
</template>

<script>

import { tasService } from '../../services/tas.service';

export default {
  data() {
    return {
      ctcs: [],
      systems: [],
      stations: [],
      form: { ctc: '' },
    };
  },
  computed: {
  },
  created() {
    this.getCtcs();
  },
  methods: {
    getCtcs() {
      tasService.getCtcs()
        .then((data) => {
          console.log('data:');
          console.log(data);
        },
        );
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
