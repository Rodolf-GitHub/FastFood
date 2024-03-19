// product.controller.js
const  Product  = require('../models/productModels');

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({ message: 'Error al obtener productos' });
    }
  }

  async getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error al obtener producto por ID:', error);
      res.status(500).json({ message: 'Error al obtener producto por ID' });
    }
  }

  async createProduct(req, res) {
    const productData =await req.body;
    try {
      const newProduct = new Product(productData);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error al crear producto:', error);
      res.status(500).json({ message: 'Error al crear producto', error });
    }
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const productData = req.body;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      res.status(500).json({ message: 'Error al actualizar producto' });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      res.status(500).json({ message: 'Error al eliminar producto' });
    }
  }
}

module.exports = ProductController;
