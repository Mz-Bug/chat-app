<template>
  <q-page class="flex column">
    <q-banner class="text-center text-white bg-red">
      User is offline
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendmessage" class="full-width">
          <q-input
            v-model="newmesssage"
            class="q-py-sm"
            rounded
            dense
            standout="bg-dark "
            placeholder="Massage"
            color="white"
          >
            <template v-slot:after>
              <q-btn
                round
                dense
                flat
                @click="sendmessage"
                icon="send"
                color="white"
              />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newmesssage: "",
      messages: [
        {
          text: "hey! how are you",
          from: "me",
        },
        {
          text: "im good wbu",
          from: "them",
        },
        {
          text: "preety and thanks",
          from: "me",
        },
      ],
    };
  },
  methods: {
    sendmessage() {
      this.messages.push({
        text: this.newmesssage,
        from: "me",
      });
      this.clear();
    },
    clear() {
      this.newmesssage = "";
    },
  },
};
</script>
<style>
</style>