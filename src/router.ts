import { Router } from 'express';
import { body } from 'express-validator';
import { handleInputErros } from './modules/middlewares';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';

const router = Router();

// Product
router.get('/product', getProducts);
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErros, updateProduct)
router.post('/product', body('name').isString(), handleInputErros, createProduct)
router.delete('/product/:id', deleteProduct)

// Update
router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id', [
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(["IN_PROGESS", "SHIPPED", "DEPRECATED"]),
  body('version').optional()], 
  handleInputErros, updateUpdate)
router.post('/update', [
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString(),], handleInputErros, createUpdate)
router.delete('/update/:id', deleteUpdate)

// Update Point
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', [
  body('name').optional().isString(), 
  body('description').optional().isString()], handleInputErros, (req, res) => {
  res.status(200);
  res.json({message: "successful update"});
})
router.post('/updatepoint', [
  body('name').isString(), 
  body('description').isString(),
  body('updateId').exists().isString()],
  handleInputErros,
  (req, res) => {
  res.status(200);
  res.json({message: "successful update"});
})
router.delete('/updatepoint/:id', () => {})

export default router;