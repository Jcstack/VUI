require('browser-env')()

const isUnitsTest = process.env.NODE_ENV === 'test-units'
const hooks = require('require-extension-hooks')

// Setup vue files to be processed by `require-extension-hooks-vue`
!isUnitsTest && hooks('vue').plugin('vue').push()

// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push()
