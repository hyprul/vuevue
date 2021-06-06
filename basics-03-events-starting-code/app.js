const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "Sean",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    addCount(value) {
      this.counter += value;
    },
    decCount(value) {
      this.counter -= value;
    },
    submitForm() {
      alert("Submitted");
    },
  },
});

app.mount("#events");
