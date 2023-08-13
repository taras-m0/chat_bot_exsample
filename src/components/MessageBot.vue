<script setup>
import { defineProps } from "vue";
import UserRobot from "@/assets/UserRobot.vue";

const props = defineProps(["message"]);
</script>

<template>
  <div class="message-bot">
    <UserRobot class="message-bot__icon"></UserRobot>
    <div class="message-bot__message">{{ props.message }}</div>
  </div>
</template>

<style lang="sass">
.message-bot
  display: flex
  gap: 16px
  padding-right: 3.5em
  align-items: center

.message-bot__message
  position: relative
  background: #44f
  color: white
  border-radius: 3px
  padding: 8px
  flex-grow: 1
  &:before
    content: ""
    border: solid transparent
    position: absolute
    right: 100%
    top: 50%
    border-right-color: #33f
    border-width: 9px
    margin-top: -9px

.message-bot__icon
  flex-shrink: 0
  flex-grow: 0
</style>
