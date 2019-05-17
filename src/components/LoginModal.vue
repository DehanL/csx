<template lang="pug">
  b-modal#loginModal(hide-footer='')
    b-container
      h1 Login
      b-form(@submit='onSubmit', @reset='onReset', v-if='show')
        h4 Email
        b-form-input#exampleInput1(type='email', v-model='form.email', required='', placeholder='Enter email')
        h4 Password
        b-form-input#exampleInput2(type='text', v-model='form.name', required='', placeholder='Enter name')
        //h4 Into
        //b-form-select#exampleInput3(:options='foods', required='', v-model='form.food')
        b-form-checkbox-group#exampleChecks(v-model='form.checked')
          b-form-checkbox(value='me') Remember Me
          //b-form-checkbox(value='that') Check that out
      //div(slot='modal-footer')
      b-button.m-1(type='submit', variant='primary') Login
      a.text-primary.m-1() Register
</template>

<script>
export default {
  name: 'LoginModal',
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
