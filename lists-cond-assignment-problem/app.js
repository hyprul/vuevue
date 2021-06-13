const app = Vue.createApp({
  data() {
    return {
      taskInput: "",
      tasks: [],
      show: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = "";
    },
    toggleShow() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
