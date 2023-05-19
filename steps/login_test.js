const { I, login, onboarding} = inject() 

Feature('login');

Scenario('login with correct credentials',  ({ I }) => {
    onboarding.passOnboarding()
    login.doLogin('27336979866', 'Terra@123')
});

Scenario('login with wrong username',  ({ I }) => {
    onboarding.passOnboarding()
    login.doLogin('27336979864', 'Terra@123')
    
});

Scenario('login with wrong password',  ({ I }) => {
    onboarding.passOnboarding()
    login.doLogin('27336979866', 'Terra@12345')
});
