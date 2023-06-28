const { I } = inject();


module.exports = {

  button: {
    access: '~login_acessAccountButton',
    create: '~login_createAccountButton',
    forgot: '~forgot_password',
    continue: '~button_BottomButton'
  },

  input: {
    username: '~input_username',
    password: '~input_password'
  },

  screen: {
    home: 'Início'
  },

  warnings: {
    wrong_user: '',
    wrong_password: 'Usuário ou senha inválidos',
  },

  doLogin(username, password) {
    I.click(this.button.access)
    I.fillField(this.input.username, username)
    I.click(this.button.continue)
    I.waitForElement(this.input.password, 12)
    I.fillField(this.input.password, password)
    I.click(this.button.continue)
  },
  validateWarnings() {
    I.waitForText(this.warnings.wrong_password, 20)
    I.see(this.warnings.wrong_password, 20)
  },
  forgotpassword(username) {
    I.click(this.button.access)
    I.fillField(this.input.username, username)
    I.click(this.button.continue)
    I.waitForElement(this.button.forgot, 10)
    I.click(this.button.forgot)
    I.waitForElement(this.button.continue)
    I.click(this.button.continue)
    I.fillField(this.input.username, username)
    I.click(this.button.continue)
  
  }
}