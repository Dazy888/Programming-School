const withPWA = require('next-pwa')({
    dest: 'public/manifest'
})

module.exports = withPWA({})