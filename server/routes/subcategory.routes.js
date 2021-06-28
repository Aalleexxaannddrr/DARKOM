const { Router } = require('express')
const Subcategory = require('../models/subcategory')
const router = Router()

router.get('/:id', async (req, res) => {
  try {
      const subcategory = await Subcategory.findById(req.params.id)
      res.json(subcategory)
  } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/', async (req, res) => {
  try {
      const subcategory = await Subcategory.find()
      res.json(category)
  } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router