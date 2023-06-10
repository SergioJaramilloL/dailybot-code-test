const { Router } = require('express')
const { getMoviesController } = require('./movie.controller')

const router = Router();

router.get('/', getMoviesController);

module.exports = router;