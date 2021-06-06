const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incCount() {
      this.count += 1;
    },
    decCount() {
      this.count -= 1;
    },
  },
});

app.mount("#events");
