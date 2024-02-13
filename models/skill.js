const skills = [
    {id: 1, skill: 'models', done: true},
    {id: 2, skill: 'routes', done: true},
    {id: 3, skill: 'views', done: true}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}