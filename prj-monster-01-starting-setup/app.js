const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= attackValue;

      const monsterAttackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      this.playerHealth -= monsterAttackValue;
    },
  },
  computed: {},
});

app.mount("#game");
