import { Router } from 'express';
import { body, oneOf } from 'express-validator';
import { handleInputErros } from './modules/middlewares';

const router = Router();

// Product
router.get('/product', (req, res) => {
  res.json({message: 'message'})
})
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(), handleInputErros, (req, res) => {
  res.status(200);
  res.json({message: "product successfully update"});
})
router.post('/product', body('name').isString(), handleInputErros, (req, res) => {
  res.status(200);
  res.json({message: "product successfully created"});
})
router.delete('/product/:id', () => {})

// Update
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', [
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(["IN_PROGESS", "SHIPPED", "DEPRECATED"]),
  body('version').optional()], 
  handleInputErros, (req, res) => {
    res.status(200);
    res.json({message: "successful update"});
})
router.post('/update', [
  body('title').exists().isString(),
  body('body').exists().isString()], handleInputErros, (req, res) => {
  res.status(200);
  res.json({message: "successful update"});
})
router.delete('/update/:id', () => {})

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