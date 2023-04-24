// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// association methods on sequelize models to create relationships
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "product_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tags",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tag_products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
