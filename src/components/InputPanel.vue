<script setup>
import { ref, onMounted, defineEmits } from "vue";
import PaperPlaneTop from "@/assets/PaperPlaneTop.vue";

const inputEl = ref(null);
onMounted(() => {
  inputEl.value.focus();
});

const emit = defineEmits(["send"]);
const message = ref("");
function submit() {
  emit("send", message.value);
  message.value = "";
}

const buttons = [
  "Заказать пиццу",
  "Вызвать такси",
  "Завести будильник",
  "ничего не делать",
];
</script>

<template>
  <form class="input-panel-input" action="" @submit.prevent.stop="submit">
    <input
      type="text"
      v-model="message"
      class="input-panel__input"
      ref="inputEl"
    />
    <button role="button" class="input-panel-input__button">
      <PaperPlaneTop></PaperPlaneTop>
    </button>
  </form>

  <div class="input-panel-buttons">
    <button
      v-for="(btn, key) in buttons"
      :key="key"
      type="button"
      class="input-panel-buttons__button"
      @click.stop.prevent="emit('send', btn)"
    >
      {{ btn }}
    </button>
  </div>
</template>

<style lang="sass">
.input-panel-input
  display: flex
  gap: 8px
  outline-offset: 0
  //&:focus, &:focus-visible
  //  outline: none
  margin: 8px 0

.input-panel__input
  flex-grow: 1
  flex-shrink: 1

.input-panel-buttons
  display: flex
  justify-content: flex-start
  flex-wrap: wrap
  gap: 8px
</style>
