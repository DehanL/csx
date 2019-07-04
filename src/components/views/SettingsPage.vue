<template lang="pug">
  b-container.page-container
      div
        h2 System settings
        form.row(@submit.prevent='handleSubmit', v-if="config")
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
              b-form-input#input-mqtt-host(:value='config.mqtt.host', disabled='')
            b-form-group#input-group-3(label='Port', label-for='input-mqtt-port')
              b-form-input#input-mqtt-port(:value='config.mqtt.port', disabled='')
            b-form-group#input-group-3(label='Client Id', label-for='input-mqtt-clientId')
              b-form-input#input-mqtt-client-Id(:value='config.mqtt.clientId', disabled='')
          // .col-12
            b-button(type='submit', variant='primary') Save
        div(v-else="")
          h3 No configuration loaded for this system
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
