const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Создание продукта
router.post('/products', async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).send(product);
});

// Получение всех продуктов
router.get('/products', async (req, res) => {
    const products = await Product.findAll();
    res.send(products);
});

// Обновление продукта
router.put('/products/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    res.send(product);
});

// Удаление продукта
router.delete('/products/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.status(204).send();
});

module.exports = router;
