const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const PORT = config.get('port') || 5000

const app = express()

// app.use(express.json({ extended: true }))

app.use(require("body-parser").json())
app.use('/api/category', require('./routes/category.routes'))
app.use('/api/subcategory', require('./routes/subcategory.routes'))
app.use('/api/product', require('./routes/product.routes'))
app.use('/api/auth', require('./routes/auth.routes'))

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()