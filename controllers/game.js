const fs = require("fs").promises;
const { makeRatingFile, config } = require('../appModules/rating/index')
const { getRandomGame } = require('../appModules/api/index')

async function gameRouteController(res) {
    try {
        const ratingFile = await fs.readFile(config.PATH_TO_DATASET)
        const data = JSON.parse(ratingFile)
        const game = getRandomGame(data)
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(game));
    } catch {
        res.statusCode = 500
        res.end('Internal Server Error')
    }
  }

  module.exports = gameRouteController