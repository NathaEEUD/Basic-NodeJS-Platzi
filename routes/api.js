const API_BASE = '/api'
const db = require('../db')

module.exports = app => {
    app.get(`${API_BASE}/users`, (req, res) => {
        const query = db.getUsers()
        res.json(query)
    }),
    app.get(`${API_BASE}/users/:id`, (req, res) => {
        const query = db.getUserById(req.params.id)
        res.json(query)
    })
}