const app = Vue.createApp({
  data() {
    return {
      classInput: "",
      inlineStyle: "",
      toggled: false,
    };
  },

  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },
  },

  computed: {
    toggleCheck() {
      if (this.toggled) {
        return "hidden";
      } else {
        return "visible";
      }
    },
  },
});

app.mount("#assignment");
