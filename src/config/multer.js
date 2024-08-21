const multer = require('multer');

const storage = multer.memoryStorage(); // Use memory storage for handling files
const upload = multer({ storage });

module.exports = upload;
