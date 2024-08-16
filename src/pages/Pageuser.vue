<template>
  <q-page>
    <q-list bordered>
      <q-item
        v-for="contact in contacts"
        :key="contact.id"
        class="q-my-sm"
        clickable
        v-ripple
        to="/chat"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
         <q-badge rounded
         :color="contact.online ? 'green' : 'red'"/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {
      // computed :{
      //   online(){
      //     if(contacts.online == true)
      //     {
      //      colors = "green"
      //     } 
      //     else
      //     {
      //       colors = "red"
      //     } 
      //   }
      // },
      contacts: [
        {
          id: 1,
          name: "Ruddy Jedrzej",
          online: true
        },
        {
          id: 2,
          name: "Mallorie Alessandrini",
          online: true
        },
        {
          id: 3,
          name: "Elisabetta Wicklen",
          online: false
        },
        {
          id: 4,
          name: "Seka Fawdrey",
          online: true
        },
      ],
    };
  },
};
</script>
<style>

</style>