// wdio.conf.js
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/*.js' // Ruta al archivo de prueba
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'URL_DE_TU_APLICACION',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
