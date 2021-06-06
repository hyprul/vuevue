const app = Vue.createApp({
  data() {
    return {
      name: "Sean",
      age: 28,
      avatar:
        "https://pagesix.com/wp-content/uploads/sites/3/2021/02/sean-john.jpg?quality=80&strip=all",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
    ageFive() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
