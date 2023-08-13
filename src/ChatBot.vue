<script setup>
import { ref } from "vue";
import CloudQuestion from "@/assets/CloudQuestion.vue";
import ChatPanel from "@/components/ChatPanel.vue";

const open = ref(true);
</script>

<template>
  <div
    v-if="!open"
    class="chat-bot__icon_panel"
    @click.stop.prevent="open = true"
  >
    <CloudQuestion class="chat-bot__icon"></CloudQuestion>
  </div>
  <chat-panel v-else @close="open = false"></chat-panel>
</template>

<style lang="sass">
#chat-bot
  position: fixed
  bottom: 50px
  right: 50px
  font-size: 16px

.chat-bot__icon_panel
  width: 50px
  height: 50px
  cursor: pointer


.chat-bot__icon
  width: 100%
  height: 100%
  -webkit-filter: drop-shadow( 0px 0px 8px rgba(0, 0, 0, .7))
  filter: drop-shadow( 0px 0px 8px rgba(0, 0, 0, .7))

.chat-bot__icon_panel:hover
  .chat-bot__icon
    -webkit-filter: drop-shadow( 0px 0px 4px rgba(0, 0, 0, .7))
    filter: drop-shadow( 0px 0px 4px rgba(0, 0, 0, .7))
</style>
