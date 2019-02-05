const API_BASE = '/api'
const db = require('../db')

module.exports = app => {
    app.get(`${API_BASE}/users`, async (req, res) => {
        const query = await db.getUsers()
        res.json(query)
    })
    // http://localhost:3000/api/user/age?l=20&h=30
    app.get(`${API_BASE}/users/age`, async (req, res) => {
        const { l, h } = req.query
        const query = await db.getUserByAgeRange(l, h)
        res.json(query)
    })
    /**
     * Especialmente con aquellas que pasen parametros
     * Cuidado con el orden de resolución de rutas
     * por el URL como esta:
     */
    app.get(`${API_BASE}/users/:id`, async (req, res) => {
        const query = await db.getUserById(req.params.id)
        res.json(query)
    })
    /**
     * Este tipo de casos deben tender a estar de últimos
     * En las declaraciones de rutas.
     */  
}