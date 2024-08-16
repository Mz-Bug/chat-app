<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
        v-if="$route.path.includes('/chat')"
        to="/"
        color="white"
        icon="fas fa-angle-left"
        label="Back"
        no-caps flat dense />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        <q-btn class="absolute-right q-pr-sm"
        v-if="$route.path.includes('/','/chat')"
        to="/auth"
        color="white"
        icon="account_circle"
        label="Login"
        no-caps flat dense />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  computed: {
    title() {
      // console.log(this.$route)
      let currentpath = this.$route.path;
      if (currentpath == "/") return "InTouch";
      else if (currentpath == "/auth") return "Login";
      else if (currentpath == "/chat") return "Chat";
    },
  },
};
</script>
 <style>
</style>
