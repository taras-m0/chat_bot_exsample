<script setup>
import { defineProps } from "vue";
import UserUser from "@/assets/UserUser.vue";

const props = defineProps(["message"]);
</script>

<template>
  <div class="message-user">
    <div class="message-user__message">{{ props.message }}</div>
    <UserUser class="message-user__icon"></UserUser>
  </div>
</template>

<style lang="sass">
.message-user
  display: flex
  gap: 16px
  padding-left: 3.5em
  align-items: center

.message-user__message
  position: relative
  background: #eee
  border-radius: 3px
  padding: 8px
  flex-grow: 1
  &:before
    content: ""
    border: solid transparent
    position: absolute
    left: 100%
    top: 50%
    border-left-color: #eee
    border-width: 9px
    margin-top: -9px

.message-user__icon
  flex-shrink: 0
  flex-grow: 0
</style>
