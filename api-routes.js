
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to test project',
    });
});

// Import Test controller
var testController = require('./testController');

// Category routes
router.route('/category')
.get(testController.getAllCategory)
.post(testController.addNewCategory);


// Product routes
router.route('/product')
.get(testController.getAllProduct)
.post(testController.addNewProduct);

// Export API routes
module.exports = router;