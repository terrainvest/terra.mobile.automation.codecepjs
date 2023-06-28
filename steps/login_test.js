
const { I, login, onboarding, home} = inject() 


Feature('login');


Before(({ I }) => { // or Background
    onboarding.passOnboarding()
  });

 
Scenario('login with correct credentials',  ({ I }) => {
    login.doLogin('31747895830', 'Terra@123')
    home.validateHome()
});

// Scenario('login with wrong username',  ({ I }) => {
//     login.doLogin('27336979987', 'Terra@123')
//     login.validateWarnings()
// });

// Scenario('login with wrong password',  ({ I }) => {
//     login.doLogin('27336979866', 'Terra@12345')
//     login.validateWarnings()
// });

// Scenario('Recover password',  ({ I }) => {
//     login.forgotpassword('18518511860')
// });

// Scenario('test something', async ( { I } ) => {   // CodeceptJS 3 notation

// } );

Scenario('Consultando dados do banco de dados', async ({ I, MSSQL }) => {
  // Conecta ao banco de dados
  login.forgotpassword('18518511860')
I.wait(10)
  await MSSQL.connect();

  // Executa uma consulta
  const result = await MSSQL.query`SELECT PasswordResetToken FROM authentication.tb_users WHERE Document =18518511860`;

  // Processa os resultados
 

  // Fecha a conexão
  await MSSQL.disconnect();
});

