const express = require('express');
const router = express.Router();
const upload = require('../config/multer'); // Import multer configuration
const imageController = require('../controllers/imageController');

// Rute untuk mengunggah gambar
router.post('/images', upload.single('file'), imageController.createImage);

// Rute untuk mendapatkan semua gambar
router.get('/images', imageController.getImages);

// Rute untuk mendapatkan gambar berdasarkan ID
router.get('/images/:id', imageController.getImage);

// Rute untuk memperbarui informasi gambar
router.put('/images/:id', imageController.updateImage);

// Rute untuk menghapus gambar
router.delete('/images/:id', imageController.deleteImage);

module.exports = router;
