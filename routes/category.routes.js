const { Router } = require('express')
const Category = require('../models/category')
const router = Router()

router.get('/:id', async (req, res) => {
  try {
      const category = await Category.findById(req.params.id)
      res.json(category)
  } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/', async (req, res) => {
  try {
    const category = await Category.find()
    res.json(category)
    console.log(category)
  } catch (e) {
      next(ApiError.badRequest(e.message))
  }
})

router.post('/add', async (req, res) => {
  try {
    const { name, description, imgUrl } = req.body
    const category = new Category({
      name, description, imgUrl
    })
    console.log(category)

      await category.save()

      res.status(201).json({ category })

  } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }

})
router.post('/delete', async (req, res)=>{
  try {

  }  catch (e){
      next(ApiError.badRequest(e.message))
  }
})

module.exports = router