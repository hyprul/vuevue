const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course!",
      courseGoalB: "<h4>Master Vue!</h4>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
