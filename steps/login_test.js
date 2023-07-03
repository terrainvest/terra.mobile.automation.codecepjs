
const { I, login, onboarding, home} = inject() 


Feature('login');

// BeforeSuite( async( { I } ) => {
//   // Connects to a database
//   // The first parameter is the key that will hold a reference to the database
//   I.connect( "BUS", "mssql://root:U333cH68CfuE8mFWDCgG@localhost:1433/BUS" );
// } );

// AfterSuite( async( { I } ) => {
//   // Disconnects and removes the reference to the database
//   await I.removeConnection( "BUS" );
// } );


Before(({ I }) => { // or Background
    onboarding.passOnboarding()
  });

 
// Scenario('login with correct credentials',  ({ I }) => {
//     login.doLogin('31747895830', 'Terra@123')
//     home.validateHome()
// });

// Scenario('login with wrong username',  ({ I }) => {
//     login.doLoginwithoutuser('06086634092')
//     login.validatenewuser()
// });

// Scenario('login with wrong password',  ({ I }) => {
//     login.doLogin('03981728629', 'Terra@12345')
//     login.validateWarnings()
// });

// Scenario('login with correct credentials and various accounts',  ({ I }) => {
//     login.doLogin('27261516805', 'Terra@123')
//     login.selectaccount('38527')
//     home.validateHome()
// });

Scenario('login with Registration in analysis',  ({ I }) => {
    login.doLogin('31747895830', 'Terra@123')
    
});



// Scenario('Recover password',  ({ I }) => {
//     login.forgotpassword('18518511860')
// });

// Scenario('test something', async ( { I } ) => {   // CodeceptJS 3 notation

// } );

// Scenario('Consultando dados do banco de dados', async ({ I, MSSQL }) => {
  
//   login.forgotpassword('18518511860')

//   // Executa uma consulta
//   const result = await I.query("BUS","SELECT PasswordResetToken FROM authentication.tb_users WHERE Document =18518511860");

//   // Processa os resultados
 

//   // Fecha a conexão
  
// });

