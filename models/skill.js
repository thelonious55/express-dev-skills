const skills = [
    {id: 1, skill: 'models', done: true},
    {id: 2, skill: 'routes', done: true},
    {id: 3, skill: 'views', done: true}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill)
}

function deleteSkill(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}