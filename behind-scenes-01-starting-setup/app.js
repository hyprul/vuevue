const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount("#app");

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + "World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!";

console.log(proxy.longMessage);
