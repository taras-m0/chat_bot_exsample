export const MESSAGE_TYPE = Object.freeze({
  BOT: "bot",
  YOUR: "your",
});

const messages = [{ type: MESSAGE_TYPE.BOT, message: "Привет" }];

messages.say = function (message) {
  this.push({ type: MESSAGE_TYPE.YOUR, message });
  this.push({ type: MESSAGE_TYPE.BOT, message: `reply: ${message}` });
};

export default messages;
