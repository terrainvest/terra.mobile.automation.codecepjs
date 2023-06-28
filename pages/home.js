const { I } = inject();

module.exports = {

  screen:{
    home: 'Início',
  },

  validateHome() {
    I.waitForText(this.screen.home, 20)
    I.see(this.screen.home)
  }
}