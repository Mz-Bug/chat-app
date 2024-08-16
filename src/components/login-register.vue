<template>
  <q-form @submit="submitform">
    <q-input v-if="tab == 'register'" class="q-pb-md" filled v-model="formData.Name" label="Name" />
     <q-input class="q-pb-md" filled v-model="formData.email" type="email" label="Email" />
      <q-input class="q-pb-md" filled v-model="formData.password" type="password" label="password" />
      <q-btn color="primary" type="submit" :label="tab" />
  </q-form>
</template>
<script>
import { ref } from 'vue'
export default {
  props: ["tab"],
   data () {
    return {
      text: ref(''),
      formData: {
         Name: "",
         email: "",
         password: ""
      }
    }
  },
  methods: {
    submitform(){
      if(this.tab == 'login'){
        console.log("login user")
      }
      else{
        console.log("register user")
      }
    }
  }
};
</script>
<style>
</style>
