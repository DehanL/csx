<template lang="pug">
  b-container.page-container
      div
        h2 System settings
        form.row(@submit.prevent='handleSubmit')
          .col-4
            h3 Database
            //.row
              .col-12
                h4.text-muted Local
                b-form-group#input-group-4(label='IP', label-for='input-local-ip')
                  b-form-input#input-local-ip(v-model='form.localDbIp')
              .col-6
                b-form-group(label='Username', label-for='input-local-username')
                  b-form-input#input-local-username(v-model='form.localDbUsername')
              .col-6
                b-form-group(label='Password', label-for='input-local-password')
                  b-form-input#input-local-password(type='password', v-model='form.localDbPassword')
            .row
              .col-12
                h4.text-muted Global
                b-form-group#input-group-4(label='Ip', label-for='input-global-db')
                  b-form-input#input-global-db(v-model='form.globalDbIp')
              .col-6
                b-form-group(label='Username', label-for='input-local-username')
                  b-form-input#input-local-username(v-model='form.localDbUsername')
              .col-6
                b-form-group(label='Password', label-for='input-local-password')
                  b-form-input#input-local-password(type='password', v-model='form.localDbPassword')
          .col-4
            h3 MQTT
            b-form-group#input-group-3(label='Broker', label-for='input-mqtt-ip')
              b-form-input#input-ctc(v-model='form.brokerIp')
          .col-12
            b-button(type='submit', variant='primary') Save
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      form: {
        brokerIp: '45.55.136.212',
        localDbIp: '45.55.136.212',
        localDbUsername: 'Postgres',
        localDbPassword: 'Postgres',
        globalDbIp: '45.55.136.212',
        globalDbusername: 'Postgres',
        globalDbPassword: 'Postgres',
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
