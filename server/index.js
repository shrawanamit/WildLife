require('ignore-styles')

require('@bable/register')({
     ignore:[/(node_modules)/],
     presets:['@bable/preset-env','@bable/preset-react']
})
require('./server')