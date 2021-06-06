const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCount(){
      return this.counter += 1
    },
    decCount(){
      return this.counter -= 1
    }
  },
});

app.mount("#events");
