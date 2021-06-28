const { Schema, model, Types } = require('mongoose')

const Admin = new Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isOrganizer: { type: Boolean, required: true },
})

module.exports = model('Admin', Admin)