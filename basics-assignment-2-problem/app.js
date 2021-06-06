const app = Vue.createApp({
  data() {
    return {
      output: "",
      outputEntered: "",
    };
  },
  methods: {
    alertMe() {
      alert("Hello!");
    },
    outputKey(event) {
      this.output = event.target.value;
    },
    outputConfirm(event) {
      this.outputEntered = event.target.value;
    },
  },
});

app.mount("#assignment");
