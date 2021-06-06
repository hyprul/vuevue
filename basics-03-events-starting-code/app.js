const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCount(value){
      this.counter += value
    },
    decCount(value){
      this.counter -= value
    }
  },
});

app.mount("#events");
