const { I } = inject();

module.exports = {

  button:{
    access: '~login_acessAccountButton',
    create: '~login_createAccountButton',
    forgot: '~forgot_password',
    continue: '~button_BottomButton'
  },

  input:{
    username:'~input_username',
    password: '~input_password'
  },

  screen: {
    home: 'Início'
  },

  warnings: {
    wrong_user: '',
    wrong_password: '',
  },

  doLogin(username, password) {
    I.click(this.button.access)
    I.fillField(this.input.username, username)
    I.click(this.button.continue)
    I.waitForElement(this.input.password, 8)
    I.fillField(this.input.password, password)
    I.click(this.button.continue)
    I.waitForText(this.screen.home, 10)
    I.see(this.screen.home)
  }
}