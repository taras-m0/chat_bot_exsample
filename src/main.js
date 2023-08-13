import { createApp } from "vue";
import App from "./App.vue";
import ChatBot from "./ChatBot.vue";

createApp(App).mount("#app");

const $el = document.createElement("div");
$el.setAttribute("id", "chat-bot");
document.getElementsByTagName("body")[0].appendChild($el);

createApp(ChatBot).mount("#chat-bot");
