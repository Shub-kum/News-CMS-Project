const { body } = require('express-validator');

const loginValidation = [
    body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .matches(/^\S+$/)
    .withMessage("Username must be contain spaces")
    .isLength({ min: 4, max: 10})
    .withMessage("Username must be 5 to 10 characters long"),



    body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5, max: 12})
    .withMessage("Password must be 5 to 12 characters long")
    
    
];

const UserValidation = [
    body("fullname")
    .trim()
    .notEmpty()
    .withMessage("Fullname is required")
    .matches(/^\S+$/)
    .isLength({ min: 5, max: 20})
    .withMessage("Fullname must be 5 to 20 characters long"),

    body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .matches(/^\S+$/)
    .withMessage("Username must be contain spaces")
    .isLength({ min: 5, max: 10})
    .withMessage("Username must be 5 to 10 characters long"),
    
    body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5, max: 12})
    .withMessage("Password must be 5 to 12 characters long"),

    body("role")
    .trim()
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["author", "admin"])
    .withMessage("Role must be author or admin")
]

const UserUpdateValidation = [
    body("fullname")
    .trim()
    .notEmpty()
    .withMessage("Fullname is required")
    .matches(/^\S+$/)
    .isLength({ min: 4, max: 20})
    .withMessage("Fullname must be 4 to 20 characters long"),

    
    body("password")
    .optional({checkFalsy: true})
    .isLength({ min: 5, max: 12})
    .withMessage("Password must be 5 to 12 characters long"),

    body("role")
    .trim()
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["author", "admin"])
    .withMessage("Role must be author or admin")
]

const categoryValidation = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Fullname is required")
    .isLength({ min: 4, max: 20})
    .withMessage("Category Name must be 4 to 20 characters long"),

    body("description")
    .isLength({ max: 100})
    .withMessage("Description must be 4 to 20 characters long"),
]

const articleValidation = [
    body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 5, max: 50})
    .withMessage("Title must be 5 to 50 characters long"),

    body("content")
    .trim()
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ min: 10, max: 500})
    .withMessage("Content must be 10 to 500 characters long"),

    body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required")
    .isMongoId()
    .withMessage("Category must be a valid id"),

    
]

module.exports = { 
    loginValidation,
    UserValidation,
    UserUpdateValidation,
    categoryValidation,
    articleValidation   
};