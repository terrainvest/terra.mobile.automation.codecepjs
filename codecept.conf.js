const server = require ('./server/server.js')
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      path: '/wd/hub',
      port: 4723,
      app: '/Users/nicolas.duarte/Documents/terra.mobile.automation.codeceptjs/app/TerraApp.apk',
      desiredcapabilities: {
        deviceName: 'qa_test',
        platformversion: '12.0',

      },

      MSSQL: {
        driver: "mssql",
        host: "10.10.1.30",
        user: "userbus",
        password: "U333cH68CfuE8mFWDCgG",
        database: "BUS",
        options: {
          encrypt: true, // se o seu servidor SQL Server estiver configurado para usar SSL
        },
      },
  },
},

  include: {
    I: './steps_file.js',
    login: "./pages/login.js",
    onboarding: "./pages/onboarding.js",
    home: "./pages/home.js"
  },
  mocha: {},    
  bootstrap: async () => {    
    await server.start();  
  },    
  teardown: async () => {    
    await server.stop();   
  },   
  hooks: [],  
  plugins: {        
    screenshotOnFail: {            
      enabled: true        
    },        
    retryFailedStep: {            
      enabled: true        
    }    
  },

  name: 'terra.mobile.automation.codecepjs',
  tests: './steps/*_test.js'
}