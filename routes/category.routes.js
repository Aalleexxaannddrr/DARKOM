const { Router } = require('express')
const Category = require('../models/category')
const router = Router()
const ApiError = require('../error/apiError')

router.get('/:id', async (req, res,next) => {
  try {
      const category = await Category.findById(req.params.id)
      res.json(category)
  } catch (e) {
      next(ApiError.badRequest(e.message))
  }
})

router.get('/', async (req, res,next) => {
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

    await category.save()
    console.log(category)

    res.status(201).json({ category })

  } catch (e) {
      // next(ApiError.badRequest(e.message))
  }

})
// router.post('/delete', async (req, res)=>{
//   try {
//
//   }  catch (e){
//       next(ApiError.badRequest(e.message))
//   }
// })

module.exports = router