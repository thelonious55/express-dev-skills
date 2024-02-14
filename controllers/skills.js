
const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}


function index(req, res) {
    res.render('skills/index', {skill: Skill.getAll()})
}

function show(req, res) {
    res.render('skills/show', {skill: Skill.getOne(req.params.id)})
}

function newSkill (req, res) {
    res.render('skills/new')
}

function create (req, res) {
    res.redirect('/skills')
    Skill.create(req.body)
}

function deleteSkill (req, res) {
    res.redirect('/skills')
    Skill.deleteSkill(req.params.id)

}