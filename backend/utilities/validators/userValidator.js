import { body } from "express-validator";

export const registerValidation = [
  body("firstName")
    .exists({ checkFalsy: true })
    .withMessage("First name is required")
    .isString()

    .withMessage("First name should be string")
    .matches(/.{4,20}$/)
    .withMessage("First name should be between 3 and 20 characters long"),
  body("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Last name is required")
    .isString()
    .withMessage("Last name should be string")
    .matches(/.{4,20}$/)
    .withMessage("Last name should be between 3 and 20 characters long"),
  body("email").isEmail().withMessage("Email should be valid"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password should be string")
    .matches(/.{6,}$/)
    .withMessage(
      "Password should be at least 6 characters long"
    ),
];

export const loginValidation = [
  body("email").isEmail().withMessage("Email should be valid"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password should be string")
    .matches(/.{6,}$/)
    .withMessage(
      "Password should be at least 6 characters long"
    ),
];