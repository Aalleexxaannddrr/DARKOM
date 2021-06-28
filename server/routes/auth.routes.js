const { Router } = require('express')
const bcrypt = require('bcrypt')
const Admin = require('../models/admin')
const { check, validationResult } = require('express-validator')
const router = Router()
const jwt = require('jsonwebtoken')
const config = require('config')

router.post(
    '/register',
    [
        check('password', 'Минимальная длина пароля - 6 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }
            console.log(req.body)
            const candidate = await Admin.findOne({ login })
            if (candidate) {
                res.status(400).json({ message: 'Такой пользователь уже существует' })
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const admin = new Admin({ login, password: hashedPassword })
            await admin.save()
            res.status(201).json({ message: 'Пользователь создан' })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    })

router.post(
'/login',
    [
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            console.log(req.body)
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при авторизации'
                })
            }
            const { login, password } = req.body
            const admin = await Admin.findOne({ login })
            if (!admin) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }
            const isMatch = await bcrypt.compare(password, admin.password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
            }
            const token = jwt.sign(
                { adminId: admin.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )
            res.json({ token, adminId: admin.id })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    })

module.exports = router