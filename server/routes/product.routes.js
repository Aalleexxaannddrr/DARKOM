const { Router } = require('express')
const Product = require('../models/product')
const router = Router()

router.get('/:id', async (req, res) => {
  try {
      const product = await Product.findById(req.params.id)
      res.json(product)
  } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/', async (req, res) => {
  try {
      const product = await Product.find()
      res.json(product)
  } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router