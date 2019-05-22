<template lang="pug">
  b-container.page-container
    .form-screen.mx-auto
      h2 Register
      form(@submit.prevent='handleSubmit')
        .form-group
          label(for='firstname') First Name
          input.form-control(type='text', v-model='user.firstname', v-validate="'required'", name='firstname', :class="{ 'is-invalid': submitted && errors.has('firstname') }")
          .invalid-feedback(v-if="submitted && errors.has('firstname')") {{ errors.first('firstname') }}
        .form-group
          label(for='lastname') Last Name
          input.form-control(type='text', v-model='user.lastname', v-validate="'required'", name='lastname', :class="{ 'is-invalid': submitted && errors.has('lastname') }")
          .invalid-feedback(v-if="submitted && errors.has('lastname')") {{ errors.first('lastname') }}
        .form-group
          label(for='id') Sap Number
          input.form-control(type='text', v-model='user.id', v-validate="'required'", name='id', :class="{ 'is-invalid': submitted && errors.has('id') }")
          .invalid-feedback(v-if="submitted && errors.has('id')") {{ errors.first('id') }}
        .form-group
          label(for='email') Role
          input.form-control(type='text', v-model='user.role', v-validate="'required'", name='role', :class="{ 'is-invalid': submitted && errors.has('role') }")
          .invalid-feedback(v-if="submitted && errors.has('role')") {{ errors.first('role') }}
        .form-group
          label(htmlfor='password') Password
          input.form-control(type='password', v-model='user.password', v-validate='{ required: true, min: 6 }', name='password', :class="{ 'is-invalid': submitted && errors.has('password') }")
          .invalid-feedback(v-if="submitted && errors.has('password')") {{ errors.first('password') }}
        .form-group
          button.btn.btn-primary(:disabled='status.registering') Register
          img(v-show='status.registering', src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==')
          router-link.btn.btn-link(to='/login') Cancel
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        id: '',
        role: '',
        password: '',
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState('account', ['status']),
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
