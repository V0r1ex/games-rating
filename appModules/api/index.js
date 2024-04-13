const apiUtils = require('./api-utils')
const endpoints = require('./config')

module.exports = {
    getData: apiUtils.getData,
    getRandomGame: apiUtils.getRandomGame,
    endpoints,
}