const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCount(){
      this.counter += 1
    },
    decCount(){
      this.counter -= 1
    }
  },
});

app.mount("#events");
