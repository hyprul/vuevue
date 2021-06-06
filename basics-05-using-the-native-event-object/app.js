const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      (this.name = ""), (this.counter = 0);
    },
    outputFullName() {
      if (this.name == "") {
        return "";
      }
      return this.name + " " + "Huang";
    },
  },
  computed: {
    fullName() {
      if (this.name == "") {
        return "";
      }
      return this.name + " " + "Huang";
    },
  },
});

app.mount("#events");
