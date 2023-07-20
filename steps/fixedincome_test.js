const {login, onboarding, home, fixed} = inject() 


Feature('fixedincome');

Before(({ I }) => { // or Background
    onboarding.passOnboarding()
    login.doLogin('31747895830', 'Terra@123')
    home.validateHome()
  });

 
Scenario('invest',  ({ I }) => {
   home.acessFixedincome(),
   fixed.invest()
});