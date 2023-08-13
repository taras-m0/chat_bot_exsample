<script setup>
import { defineEmits, ref, onMounted, onBeforeUnmount } from "vue";
// import CircleClose from "@/assets/CircleClose.vue";
import CrossClose from "@/assets/CrossClose.vue";
import InputPanel from "@/components/InputPanel.vue";
import messages, { MESSAGE_TYPE } from "@/Model";
import MessageBot from "@/components/MessageBot.vue";
import MessageYou from "@/components/MessageYou.vue";

const emit = defineEmits(["close"]);

// function close() {
//   console.log("pre close", emit);
//   emit("close");
// }

const messagesList = ref(messages);
function send(message) {
  messagesList.value.say(message);
}

function keyup(event) {
  if (event.keyCode == 27) {
    emit("close");
  }
}

// Отображаем последние сообщания
let mo;
const containerEl = ref(null);
onBeforeUnmount(() => {
  mo && mo.disconnect();
});
onMounted(() => {
  mo = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        node.scrollIntoView &&
          node.scrollIntoView({
            block: "nearest",
          });
      });
    });
  });

  mo.observe(containerEl.value, {
    childList: true,
    subtree: false,
  });
});
</script>

<template>
  <div class="chat-panel" @keyup.prevent.stop="keyup">
    <div class="chat-panel__messages" ref="containerEl">
      <template v-for="mess in messagesList" :key="mess.message">
        <component
          v-if="mess.type == MESSAGE_TYPE.YOUR"
          :is="MessageYou"
          :message="mess.message"
        ></component>
        <component
          v-else-if="mess.type == MESSAGE_TYPE.BOT"
          :is="MessageBot"
          :message="mess.message"
        ></component>
      </template>
    </div>

    <div class="chat-panel__shadow"></div>
    <hr />

    <input-panel @send="send"></input-panel>

    <CrossClose
      class="chat-panel__close"
      @click.stop.prevent="emit('close')"
    ></CrossClose>
  </div>
</template>

<style lang="sass">
.chat-panel
  display: flex
  flex-direction: column
  position: relative
  width: 350px
  border-radius: 4px
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, .3)
  background: white
  padding: 8px 8px 8px
  box-sizing: border-box
  max-height: calc(100vh - 100px)
  *
    box-sizing: border-box

  hr
    width: 100%
    margin-top: 0

.chat-panel__messages
  overflow: auto
  padding-bottom: 1em
  padding-right: 6px
  margin-right: -6px
  display: flex
  gap: 8px
  flex-direction: column

.chat-panel__shadow
  height: 2em
  margin-top: -1em
  padding-bottom: 1em
  background-image: linear-gradient(rgba(0,0,0, 0), rgba(255,255,255, 1))
  position: relative

.chat-panel__close
  position: absolute
  height: 24px
  width: 24px
  padding: 4px
  border-radius: 4px
  background: white
  top: 7px
  right: 18px
  cursor: pointer
  //-webkit-filter: drop-shadow( 0px 0px 8px rgba(0, 0, 0, .7))
  //filter: drop-shadow( 0px 0px 8px rgba(0, 0, 0, .7))
  color: rgba(0, 0, 0, .5)
  &:hover
    color: rgba(0, 0, 0, .8)
</style>
