const { I } = inject();


module.exports = {

  button: {
    access: '~button_BottomButton',
    create: '~login_createAccountButton',
    forgot: '~forgot_password',
    continue: '~button_BottomButton',
    account: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'
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
    wrong_new_user: 'Você ainda não possui cadastro',
    wrong_new_user_link: 'Não, fechar o app',
  },

  doLogin(username, password) {
    I.click(this.button.access)
    I.fillField(this.input.username, username)
    I.click(this.button.continue)
    I.waitForElement(this.input.password, 12)
    I.fillField(this.input.password, password)
    I.click(this.button.continue)
  },
  doLoginwithoutuser(username) {
    I.click(this.button.access)
    I.fillField(this.input.username, username)
    I.click(this.button.continue)
  },
  validateWarnings() {
    I.waitForText(this.warnings.wrong_password, 20)
    I.see(this.warnings.wrong_password, 20)
  },

  validatenewuser() {
    I.waitForText(this.warnings.wrong_new_user, 20)
    I.see(this.warnings.wrong_new_user)
    I.see(this.warnings.wrong_new_user_link)
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

  },
  selectaccount(account) {
    I.waitForText(account,15)
    I.click(account)
  }
}