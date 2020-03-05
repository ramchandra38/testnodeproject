// Import Category and Product model

Category = require('./category.model');
Product = require('./products.model');

// Get all Categories and number of products in each category
exports.getAllCategory = async function (req, res) {
    const categories = await Category.find();
    const products = await Promise.all(categories.map(category => {
        const { categoryId } = category;
        return Product.find({ categoryId });
    }))
    const response = categories.map((category, i) => {
        const { categoryId, categoryName } = category;
        return {
            categoryId,
            categoryName,
            number_of_product: products[i].length
        }
    }
    )
    return res.json({
        status: "success",
        message: "Categories retrieved successfully",
        data: response
    });
};

//Add New Category
exports.addNewCategory = function (req, res) {
    var category = new Category();
    category.categoryId = req.body.categoryId;
    category.categoryName = req.body.categoryName;
    // save the record and check for errors
    category.save(function (err) {
        res.json({
            message: 'New Category created!',
            data: category
        });
    });
};

//getAllProduct
exports.getAllProduct = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: products
        });
    });
};

//addNewProduct
exports.addNewProduct = function (req, res) {
    var product = new Product();
    product.ProductId = req.body.ProductId;
    product.categoryId = req.body.categoryId;
    product.ProductName = req.body.ProductName;
    // save the record and check for errors
    product.save(function (err) {
        res.json({
            message: 'New product created!',
            data: product
        });
    });
};



