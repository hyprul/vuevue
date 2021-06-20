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
    },
    attackPlayer() {
      const monsterAttackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= monsterAttackValue;
    },
  },
  computed: {},
});

app.mount("#game");
