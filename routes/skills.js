var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')
// all actual paths start with "/skills"

module.exports = router;

router.post('/', skillsCtrl.create)

router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

router.get('/:id', skillsCtrl.show)



