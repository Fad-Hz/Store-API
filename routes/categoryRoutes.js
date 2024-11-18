const express = require('express')
const categoryController = require('../controllers/categoryController')
const { admin, token } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/',token, admin, categoryController.createCategory)
router.get('/',token categoryController.getAllCategories)
router.get('/:id',token categoryController.getCategoryById)
router.put('/:id',token,admin categoryController.updateCategory)
router.delete('/:id',token,admin categoryController.deleteCategory)

module.exports = router