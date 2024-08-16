<template>
  <q-page class="flex">
    <q-card class="q-pa-md full-width">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <login-register :tab = "tab" />
          </q-tab-panel>
          <q-tab-panel name="register">
           <login-register :tab= "tab" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue'
// import login from "../components/login-register.vue"
export default({
  components:{
    // 'login-register': login
    'login-register' : require('components/login-register.vue').default
  },
 setup () {
    return {
      tab: ref('login')
    }
  }
})
</script>
<style>

</style>