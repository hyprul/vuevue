function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      currentRound += 1;
    },
    attackPlayer() {
      const monsterAttackValue = getRandomValue(8, 15);
      this.playerHealth -= monsterAttackValue;
    },
    specialAttackMonster() {
      if (currentRound % 3 === 0) {
        const attackValue = getRandomValue(10, 25);
        this.monsterHealth -= attackValue;
        this.attackPlayer();
        currentRound += 1;
      }
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
});

app.mount("#game");
