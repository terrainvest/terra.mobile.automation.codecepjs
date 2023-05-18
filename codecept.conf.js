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
      app: '/Users/kalinemaciel/Documents/terra.mobile.automation.codecepjs/app',
      desiredcapabilities: {
        deviceName: 'qa_test',
        platformversion: '12.0',

      }
    }
  },
  
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_page.js"
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