const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value == "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value == "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
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
      (this.name = ""), (this.counter = 0), (this.lastName = "");
    },
    outputFullName() {
      if (this.name == "" && this.lastName == "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  computed: {
    fullName() {
      if (this.name == "" && this.lastName == "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
});

app.mount("#events");
