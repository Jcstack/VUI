require('browser-env')()

const isUnits = process.env.NODE_ENV === 'test-units'
const hooks = require('require-extension-hooks')

// Setup vue files to be processed by `require-extension-hooks-vue`
!isUnits && hooks('vue').plugin('vue').push()

// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push()
