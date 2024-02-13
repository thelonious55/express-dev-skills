var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')
// all actual paths start with "/skills"

module.exports = router;

router.get('/', skillsCtrl.index)

router.get('/:id', skillsCtrl.show)