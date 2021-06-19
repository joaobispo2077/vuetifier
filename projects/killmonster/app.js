new Vue({
  el: '#app',
  data: {
    running: false,
    playerLife: 100,
    monsterLife: 100,
    logs: []
  },
  computed: {
    hasResult() {
      return this.playerLife === 0 || this.monsterLife === 0;
    }
  },
  methods: {
    startGame() {
      this.running = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
    },
    giveUpGame() {
      this.running = false;
    },
    attack(special) {
      this.hurt('monsterLife', 7, 13, special, 'Jogador', 'Monstro', 'player');
      this.hurtPlayer();
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);

      this.playerLife = Math.min(this.playerLife + heal, 100);

      this.registerLog(`O jogador acaba de se curar em ${heal} de vida`, 'player');
    },
    hurt(player, min, max, special, source, target, css) {
      const plus = special ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[player] = Math.max(this.playerLife - hurt, 0);
      this.registerLog(`${source} atingiu ${target} com ${hurt} de poder.`, css);
    },
    healAndHurt() {
      this.heal(10, 18);
      this.hurtPlayer();
    },
    hurtPlayer() {
      if (this.monsterLife > 0)
        this.hurt('playerLife', 7, 17, false, 'Monstro', 'Jogador', 'monster');
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog(text, css) {
      this.logs.unshift({ text, css });
    }
  },
  watch: {
    hasResult(value) {
      if (value) this.running = false;
    }
  }
})