const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addNumber(num) {
      this.number += num;
    },
  },
  watch: {
    result() {
      console.log("Watcher Mounted!");
      that = this;
      setTimeout(function () {
        console.log("hit timer");
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      }
      if (this.number == 37) {
        return "37";
      }
      if (this.number > 37) {
        return "Too Much!";
      }
    },
  },
});

app.mount("#assignment");
