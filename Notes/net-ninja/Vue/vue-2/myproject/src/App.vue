<template>
  <div id="app">
    <FormHelper>
      <div slot="form-header">
        <h3>form title</h3>
        <p>form information</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="text" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="submitForm">Submit</button>
      </div>
    </FormHelper>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
  
  components: {
  formHelper: FormHelper
  }
}
</script>

<style>
</style>
