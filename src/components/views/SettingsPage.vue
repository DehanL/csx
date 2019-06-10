<template lang="pug">
  b-container.page-container
      div
        h2 System settings
        form.row(@submit.prevent='handleSubmit')
          .col-4
            h3 Database
            //.row
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
            b-form-group#input-group-3(label='Host', label-for='input-mqtt-host')
              b-form-input#input-mqtt-host(v-model='config.mqtt.host')
            b-form-group#input-group-3(label='Port', label-for='input-mqtt-port')
              b-form-input#input-mqtt-port(v-model='config.mqtt.port')
            b-form-group#input-group-3(label='Client Id', label-for='input-mqtt-clientId')
              b-form-input#input-mqtt-client-Id(v-model='config.mqtt.clientId')
          .col-12
            b-button(type='submit', variant='primary') Save
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Settings',
  data() {
    return {
    };
  },
  computed: {
    ...mapState('settings', ['config']),
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
